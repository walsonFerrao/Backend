const { append } = require("express/lib/response")
const mongoose=require("mongoose")

const connect= ()=>{

 mongoose.connect("mongodb+srv://walson:123@cluster0.r5d4f.mongodb.net/test")

}

module.exports=connect