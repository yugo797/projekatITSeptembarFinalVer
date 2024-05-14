import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import artistRoute from "./routes/artist.js";
import workRoute from "./routes/works.js";
import periodRoute from "./routes/period.js";
import userRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
dotenv.config();

const connection = async () => {

    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("povezano sa bazom");
    } catch(error) {
        throw error;
    }

}
//////////////////////////
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/artists", artistRoute);
app.use("/api/artworks", workRoute);
app.use("/api/periods", periodRoute);
app.use("/api/users", userRoute);

app.use((err, req, res, next)=>{
    const errStatus = err.status || 500;
    const errMsg = err.statusMessage||"Oh no.";
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: err.stack,
    }
);
});

//////////////////////////


app.listen(7700, ()=>{
    connection();
    console.log("povezano na bek nodemon test");
});

//