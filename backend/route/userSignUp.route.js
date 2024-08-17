import express from "express";
import { SignUp,SignIn } from "../controller/signUp.controller.js";
import { authenticateJWT } from "../auth/authorize.auth.js";

const route = express.Router();

route.post("/signUp",SignUp);
route.post("/signIn",authenticateJWT,SignIn);

export default route;