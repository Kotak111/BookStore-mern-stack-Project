const { Schema, model } = require("mongoose");
const bookFormat={
    type:String,
    required:true,
    trim:true
}
const book=new Schema({
    name:{
        ...bookFormat
    },
    author:{
        ...bookFormat,
        unique:true
    },
    establish:{
        type:Number,
        ...bookFormat
    },
    description:{
        ...bookFormat,
        required:false
    }
},
{timestamps:true})
const bookstd=model("Details",book)
module.exports=bookstd;