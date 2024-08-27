import { dataBaseConnect } from './dataBaseConfig/dbCongif.js';
import userSignUp from './route/userSignUp.route.js';
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import cloudinary from 'cloudinary';

// Load environment variables from .env file
dotenv.config();

// Cloudinary configuration
cloudinary.v2.config({
  cloudinary_url: process.env.CLOUDINARY_URL
});

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'custom-uploads'); 
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); 
  }
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const result = await cloudinary.v2.uploader.upload(req.file.path);
    res.status(201).json({ imageUrl: result.secure_url,sucess:true});
  } catch (error) {
    res.status(500).send('Upload failed');
  }
});

app.use("/", userSignUp);

dataBaseConnect();

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
