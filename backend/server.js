const express = require ("express");
const app = express();
const port= 8080;

app.get("/",(req,res)=>{
    res.send("welcome to home page");

})

app.get("/about", (req,res)=>{
    res.send("<h1>this is my first route server</h1>")
})


app.listen(port,()=>{
    console.log(`server running at ${port}`);
    
})