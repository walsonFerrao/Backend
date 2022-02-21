const path=require("path")
const multer  = require('multer');
const { callbackify } = require("util");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../uploads"))
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now() + Math.random().toString();
      cb(null,`uniquePrefix+${file.originalname}`)
    }
  })


  function fileFilter (req, file, cb) {

    if(file.mimetype=="image/jpeg" || file.mimetype =="image/png")
    {
        cb(new Error("file format is wrong"), false)
    }
  
   else
   {
    cb(null, true)
   }
    
  
  
  }

const upload = multer({

storage,
fileFilter,
limits:{
    fileSize: 1024*1024*10
}


})


// middleware function to upload
const uploadSingle= (filekey)=>{

return function (req,res,next)
{
const uploadItem=upload.single(filekey)
uploadItem(req,res,function(err)
{

    if (err instanceof multer.MulterError) {
        return res.status(500).send(err)
        // A Multer error occurred when uploading.
      } else if (err) {
        // An unknown error occurred when uploading.
        return res.status(500).send(err)
      }

      next()
})

}


}