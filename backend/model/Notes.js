const mongoose=require("mongoose");
const { Schema } = mongoose;
const notesSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,    //TypeError: Argument passed in must be a Buffer or string of 12 bytes or a string of 24 hex characters
        ref:'user'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,  
    },
    tag:{
        type:String,
        default:"general"
    },
    date:{
        type:Date,
        default:Date.now
    }
});
const Notes=new mongoose.model('notes',notesSchema);
module.exports=Notes;