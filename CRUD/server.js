import express from "express";
const app= express();
const port =8081;

app.use(express.json());

app.get("/",(req, res)=>{
    res.send("hello");
})

app.listen(port,()=>{
    console.log("sever running");
    
})