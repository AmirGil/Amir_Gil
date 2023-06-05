//import and set up
const express = require('express');
const path = require('path');
const app = express();
const port = 2023;
app.use(express.static(path.join(__dirname, "static")));

//routing 
app.get('/', (req,res)=>{
    res.send("hey");
})


app.listen(port, ()=>{
    console.log("server is runing on port", port);
})