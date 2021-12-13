require("../db/db"); 
const User=require("../model/User");//db model
// const { body, validationResult } = require('express-validator');  //npm validator
const bcrypt=require("bcrypt");


const jwt=require("jsonwebtoken");
const secret_key=process.env.SECRET_KEY;
const token_age=3*24*60*60;
const generateToken=(id)=>{return jwt.sign({id},secret_key,{expiresIn:token_age});}  //jwt.sign ->syncc function

module.exports.signup=async(req,res)=>{
    try 
    {
    
        const {name,email,password,year}=req.body.formvalue;

        const salt=await bcrypt.genSalt(10);
        const new_password=await bcrypt.hash(password,salt);
        console.log("password is: "+new_password);

        const insertUser=new User({
            name:name,
            email:email,
            password:new_password,
            year:year
        });

        const user=await insertUser.save();
        const user_id=user._id;
        const token=generateToken(user_id);
        res.status(200).json({
            success: true,
            data: "signup",
        });
        
    } 
    catch (error) 
    {
        console.log(error)
        res.status(500).json([{
            res:error
            
        }]);
    }

    // res.json([obj]);
}
module.exports.signin=async(req,res)=>{
    try {
        const {email,password}=req.body.formvalue;
        console.log(email);
        const user=await User.findOne({email:email});
        // console.log(user);
        if(!user){
           return res.json({
                data:"unregister email"
            });
        }

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({
                data:"password incorrect"
            });
        } 
        const token=generateToken(user._id);
        res.cookie("jwt",token,{httpOnly:true   });
        return res.json({data:"login",
                        token:token});
    } catch (error) {
        console.log(error);
        res.status(500).json([{
            res:error
        }]);
    }

    // res.json([obj]);
}
/*
module.exports.index=async (req,res)=>{
    console.log("in controller");
    const userId=req.user;
    console.log(userId);
    const user=await User.findOne({_id:userId}).select({name:1,email:1});
    if(!user){
        return res.json({
            data:"you are not logged in"
        })
    }
    res.send([user]);
}
module.exports.notes_get=async(req,res)=>{
   try{
       const allNotes=await Notes.find();
       res.status(200).json(allNotes)
   }catch(error){
        console.log(error);
        res.status(500).json({
        error:"internal server error"
        });
   }
}

module.exports.add_notes=async (req,res)=>{
    try {
        const userId=req.user;
        const {title,description,tag}=req.body;
        const create_note=new Notes({
            user:userId,
            title:title,
            description:description,
            tag:tag
        });
        const add_note=await create_note.save();
        res.status(200).json(add_note);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error:"internal server error"
        });
    }
}
module.exports.update_note=async (req,res)=>{
    try {
        const id=req.params.id;
        const {title,description,tag}=req.body;
        const newNote={};
        if(title){newNote.title=title};
        if(description){newNote.description=description};
        if(tag){newNote.tag=tag};
        console.log(newNote);
        const note=await Notes.findById(id);  
        if(!note){
            return res.json({
                data:"not found"
            })
        }
        // console.log(note.user) //login user id  ||object
        // console.log(typeof note.user.toString())//string
        // req.user;  //string
        if(note.user.toString() !==req.user){
            return res.status(401).json({
                data:"unauthorized"
            });
        }
        const update=await Notes.findByIdAndUpdate(id,{$set:newNote},{new:true});
        
        res.json(update);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error:"internal server error"
        });
    }
}
module.exports.delete_note=async(req,res)=>{
    try {
        const id=req.params.id;
        const note=await Notes.findById(id);  
        if(!note){
            return res.json({
                data:"data not found"
            })
        }
        if(note.user.toString() !==req.user){
            return res.status(401).json({
                data:"unauthorized"
            });
        }
        const delete_note=await Notes.deleteOne({_id:id});
        res.json({
            data:"deleted"
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:"internal server error"
        });
    }

}*/