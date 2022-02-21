const express=require("express")
const  router=express.Router()
const {upload,uploadSingle,uploadMultiple}=require("../middlewares/fileupload")

const Comment=require("../models/commentmodel")


router.post("",async(req,res)=>{

try{
const comment=Comment.create(req.body)
res.send(comment)

}
catch(err)
{
res.send("post comment", err)
}




})







module.exports=router