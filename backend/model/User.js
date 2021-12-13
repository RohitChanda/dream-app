const mongoose=require("mongoose");
const { Schema } = mongoose;
const validator=require("validator");
// const bcrypt=require("bcrypt");
// const saltRounds=10;
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new error("email is invalid");
            }
        }
    },
    password:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    profile_pic:{
        type:String,
        default:null
    },
    // post:{
    //     type:mongoose.Schema.Types.ObjectId,    //TypeError: Argument passed in must be a Buffer or string of 12 bytes or a string of 24 hex characters
    //     ref:'post'
    // },
    date:{
        type:Date,
        default:Date.now
    }
});

//hasing password
// userSchema.pre("save",async function(next){
//     console.log(this.password);
// })
/*userSchema.pre("save",async function(next){
    console.log(this.password);
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,saltRounds);
        console.log(this.password);
    }
    next();
})*/


const User=new mongoose.model('user',userSchema);
module.exports=User;