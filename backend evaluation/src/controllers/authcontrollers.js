require("dotenv").config();

const jwt = require('jsonwebtoken');

const Register=require("../models/registermodel")

const newToken=()=>{

    return token = jwt.sign({ register }, process.env.JWT_SECRET_KEY )

}


const register=async (req,res) =>{

    try{
    
        let register= await Register.findOne({email:req.body.email}).lean().exec()

        if(register)
        {
            return res.send("please try another mail")
        }

        register= await Register.create(req.body)

       const token =newToken(register);

      res.send(register,token)


    }
    
catch(err)
{
    res.send("token error")
}


}



const login= async (req,res)=>{

try{

const register=await Register.findOne({email:req.body.email})
if(!register)
{

return res.send("please try valid credentials")

}

const match=register.checkPassword(req.body.password)

if(!match)
{
    res.send("wrong credentials")
}

const token=newToken(register)

res.send(token)
}
catch(err)
{
    res.send("login error",err)
}


}


module.exports={register,login}

