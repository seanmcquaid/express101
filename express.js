const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.send("<h1>Hello World</h1>");
});

app.get("/class", (req,res)=>{
    res.send("<p>Hello, class!</p>")
});

app.listen(3000);