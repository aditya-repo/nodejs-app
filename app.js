const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World!");
})

app.get('/action', (req,res)=>{
    res.send("Successful deployment from Github Action")
})

app.listen(8080,()=>{
    console.log("Server running on PORT:8080");
})