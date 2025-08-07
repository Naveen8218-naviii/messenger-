const express=require("express")
const app=express();
const mongoose = require('mongoose');
const path=require("path")
const Chat=require("./models/chat.js")

main().then(()=>{console.log("connections succesfull")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/msg');

 }

 app.set("views", path.join(__dirname,"views"));
 app.set("view engine","ejs");

app.get("/",(req,res)=>{
res.send("route working")
})

app.listen(3000,()=>{
    console.log("chal gya")
})

const chat1=new Chat({
    from:"naveen",to:"nivi",msg:"baby",creted_at:new Date()
})

chat1.save(),then(()=>{console.log("chat was saved")})