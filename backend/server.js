const express = require ("express");
const app = express();
const port= 8080;

app.get("/",(req,res)=>{
    res.send("welcome to home page");

})

app.get("/about", (req,res)=>{
    
    let students=[
    {
        id:1,
        name: "rashu tomar",
        edu :"btech"
    },
    {
        id:2,
        name: "rohit chomu",
        edu :"home scinece"
    },
    {
        id:3,
        name: "mishra",
        edu :"polytechnic"
    }
]
res.send(students)
})





app.listen(port,()=>{
    console.log(`server running at ${port}`);
    
})