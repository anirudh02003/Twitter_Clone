const express = require("express");
const {router} = require("./router/router");

let app = express();
app.use(router);
const sucessIndicator =()=>{
    console.log("app started");
}

const handlelogin=(req,res)=>{
    res.send("i am login");
}

app.get("/",handlelogin);


app.listen(3000,()=>{
    console.log("app started");
})