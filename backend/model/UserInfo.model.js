import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the User Schema
const userSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true // Automatically generate an ObjectId if not provided
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    trim: true
  },
  __v: {
    type: Number,
    select: false // By default, exclude this field when querying
  }
});

// Create the User model from the schema
export const User = mongoose.model('User', userSchema);


