import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const dataBaseConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.conn);

        if (conn) {
            console.log("database is successfully connected");
        }else{
            console.log("database not connected");
            
        }
    } catch (error) {
        console.log("connect to karoo bhai");
        console.log(error);
    }
}