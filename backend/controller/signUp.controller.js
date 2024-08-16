import { User } from "../model/UserInfo.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const SignUp = async (req, res) => {
    try {
        const { email, password, mobileNumber } = req.body;

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use.' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const user = new User({
            email,
            password: hashedPassword,
            mobileNumber
        });

        // Save the user to the database
        const data = await user.save();

        // Generate JWT
        const token = jwt.sign(
            { id: data._id, email: data.email },
            process.env.SECRETKEY, 
            { expiresIn: '1h' } 
        );

        if (data) {
            console.log("User successfully added");
            return res.status(201).json({
                message: 'User registered successfully',
                token: token, // Return the generated token
                user: data
            });
        }
    } catch (error) {
        console.error("Error during user signup:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const SignIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }

        // Validate the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }

        // **Token Generation**
        const token = jwt.sign(
            { id: user._id, email: user.email },  // Payload: data to encode in the token
            process.env.SECRETKEY,                // Secret key to sign the token
            { expiresIn: '1h' }                   // Token expiration time
        );

        return res.status(200).json({
            message: 'Login successful',
            token: token,    // **Token sent back to the client**
            user: user       // User data also returned (optional)
        });
    } catch (error) {
        console.error("Error during user sign in:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
