const express=require("express");
const { default: mongoose } = require("mongoose");

const app=express();
const port=2000;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const BookRouter=require("./Router/BookRouter")
const cors=require("cors")
app.use(cors())

mongoose.connect('mongodb+srv://kotakh311:ylpVqoffVsFyI1RU@rnwharsh.jhwn3pn.mongodb.net/bookstore').then(()=>{
    console.log("database connected💕🤞");
})
.catch((err)=>{
    console.log(err);
})

app.get('/',(req,res)=>{
    res.send("json")
})
app.use("/api/book",BookRouter)
app.listen(port,()=>{console.log(`listen port number ${port}`)})