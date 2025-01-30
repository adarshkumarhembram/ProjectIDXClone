import express from "express";
import cors from "cors"
import { PORT } from "./config/serverConfig.js";

const app = express();

app.use(express.json())
app.use(express.urlencoded())
app.use(cors());

app.get("/ping",(req,res)=>{
    return res.json({ messege: 'Pong'})
})

app.listen(PORT, ()=>{
    console.log(`Server is runnung on ${PORT}`);
})