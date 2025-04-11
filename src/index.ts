import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.port || 4000;

app.get("/", (req, res)=>{
    res.status(201).json({
        message: "Basic app runs"
    })
})

app.listen(PORT, ()=>{
    console.log(`server is listening on this specific ${PORT}`)
});