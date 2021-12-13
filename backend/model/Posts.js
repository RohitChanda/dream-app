
const mongoose=require("mongoose");
const { Schema } = mongoose;
const postSchema=new Schema({
    filename:{
        type:String
    },
    filepath:{
        type:String
    },
    text:{
        type:String,
        required:true
    },
    user:{ 
        type:mongoose.Schema.Types.ObjectId,    //TypeError: Argument passed in must be a Buffer or string of 12 bytes or a string of 24 hex characters
        ref:'user'
    },
    approvalstatus:{
        type:Number,
        default:1
    },
    date:{
        type:Date,
        default:Date.now
    }
});
const Posts=new mongoose.model('posts',postSchema);
module.exports=Posts;