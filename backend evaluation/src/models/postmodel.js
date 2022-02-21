const mongoose=require("mongoose")


const postSchema = new mongoose.Schema({

  body:{type:String,required:true},
  likes:{type:Number,required:true},
  image:{type:String,required:false},
  user_id:{type:mongoose.Schema.Types.ObjectId}
},{
timestamps:true
    })


Post=mongoose.model(post,postSchema)


module.exports=Post