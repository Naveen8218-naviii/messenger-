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
    app.use(express.urlencoded({extended:true}))


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

app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newchats=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    })
 
    newchats.save().then(()=>console.log("chat save"))
    res.redirect("/chats")
})

    app.listen(3000,()=>{
        console.log("chal gya")
    })

