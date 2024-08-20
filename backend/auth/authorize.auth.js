import jwt from 'jsonwebtoken';

export const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];  // Extract token from `Bearer <token>`

        console.log("token",token.slice(1,-1));
        console.log("token",token.replaceAll('"', ''));
        

        jwt.verify(token.slice(1,-1), process.env.SECRETKEY, (err, user) => {
            if (err) {
                console.log(err);
                return res.sendStatus(403);  // Invalid token, access denied
            }
            console.log("user",user);

            req.user = user;  // Attach decoded user information to the request object
            next();           // Pass control to the next middleware/route handler
        });
    } else {
        res.sendStatus(401);  // No token provided, unauthorized access
    }
};
