const express=require("express")
const app=express();
const mongoose = require('mongoose');
const path=require("path")
const Chat=require("./models/chat.js")

main().then(()=>{console.log("connections succesfull")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/msg');

 }

 let allChats=[
    {
        from:"nivi",
        to:"navi",
        msg:"love uh",
        created_at:new Date(),
    },    {
        from:"navi",
        to:"nivi",
        msg:"bhag chudail i have a gf",
        created_at:new Date(),
    },    {
        from:"nivi",
        to:"navi",
        msg:"so what",
        created_at:new Date(),
    }
]

Chat.insertMany(allChats);