import express from 'express'
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userSignUp from './route/userSignUp.route.js';
import { dataBaseConnect } from './dataBaseConfig/dbCongif.js';
const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
dataBaseConnect();

app.use("/",userSignUp);

app.listen(process.env.PORT,()=>{
    console.log(`server run at ${process.env.PORT}`);
    
})