
const express=require("express")
const app=express()
const mongoose=require("mongoose")
const connect=require("./configs/db")

const {register,login}=require("./controllers/authcontrollers")

const userControllers=require("./controllers/usercontroller")
const postControllers=require("./controllers/postcontroller")
const commentControllers=require("./controllers/commentcontroller")


app.use("/user",userControllers)
app.use("/post",postControllers)
app.use("/comment",commentControllers)

// app.post("/register",register)
// app.post("/login",login)










app.listen(2345,async()=>{
try{
await connect()
console.log("listening to 2345")
}
catch(err)
{
    console.log(err.message)
}

})
