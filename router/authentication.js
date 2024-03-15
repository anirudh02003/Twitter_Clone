const express = require("express");
const authentication = express.Router();

authentication.get("/login",(req,res)=>{
    res.send("hello login");
})
authentication.get("/logout",(req,res)=>{
    res.send("hello login");
})
authentication.get("/signup",(req,res)=>{
    res.send("hello login");
})
authentication.get("/",(req,res)=>{
    res.send("hello login");
})



module.exports ={authentication};