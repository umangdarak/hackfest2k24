const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    PictureId:String,
    Author:ObjectId,
    data:Buffer,
    created:Date,
    likes:[ObjectId],
    content:String
})


module.exports=mongoose.model('Posts',schema);