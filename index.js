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
    app.use(express.static(path.join(__dirname,"public")))



    app.get("/",(req,res)=>{
    res.send("route working")
    })

    //index route
    app.get("/chats",async(req,res)=>{
        let chats=await Chat.find();
        console.log(chats)
        res.render("index.ejs",{chats})
    })
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
})


    app.listen(3000,()=>{
        console.log("chal gya")
    })

