const express=require("express");
const router=express.Router()

const User=require("../models/usermode")

const {upload,uploadSingle,uploadMultiple} = require("../middlewares/fileupload")

router.post("/single",uploadMultiple("profileImages"),async(req,res)=>{

try{

    const user=await User.create({
     
        firstName :req.body.firstName,
        lastName :req.body.lastName,
        age:req.body.age,
        email:req.body.email,
        profileImages:req.file.path,

})
return res.status(201).send(user)
}
catch(err){

return res.status(500).send(err.message)

}



})


router.get("",async (req,res)=>{

try{
 const users=await User.find().lean().exec()
return res.send(users)
}
catch(err)
{
    return res.send(err)

}

})





module.exports=router