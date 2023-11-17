import express from "express";
import dotenv from "dotenv"
const app = express();
dotenv.config();

app.get("/", (req,res) => {
    res.send("Hello world")
})

const Port = process.env.PORT;

app.listen(Port, () => {
    console.log(`server running on ${Port}`);
})