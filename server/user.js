const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    Username:String,
    Password:String
});


module.exports= mongoose.model('User',schema);