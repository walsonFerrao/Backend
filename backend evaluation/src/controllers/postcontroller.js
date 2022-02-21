const express=require("express")
const  router=express.Router()
const {upload,uploadSingle,uploadMultiple}=require("../middlewares/fileupload")

const Post=require("../models/postmodel")

router.post("/:id",uploadSingle("image"),async(req,res)=>{

try{

const post=await Post.create({
    body:req.body.body,
    likes:req.body.likes,
    image:req.file.path,
    user_id:req.params.id

})

res.status(201).send(post)

}
catch(err){

    res.status(400).send(err)


}


})






module.exports=router