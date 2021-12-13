const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET_KEY;
const path = require('path');
//db model
const User = require("../model/User");
const Posts = require("../model/Posts");

const findIdFromToken = (token) => {   //get user db id from token
    return jwt.verify(token, secret_key).id;
}
const userPostFileLocation="http://localhost:5000/"+process.env.USERPOST_FILE_LOCATION+"/";
const userDpLocation="http://localhost:5000/"+process.env.USERPOST_PROFILE_PIC_LOCATION+"/";
/*
const multer = require("multer");
//set storage engine
const storage = multer.diskStorage({
    destination: '../upload-file',
    filename:function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        // console.log(path.extname(file.originalname))
    }
});
//init upload
const upload = multer({
    storage: storage
}).single('file')*/


module.exports.userprofile = async (req, res) => {
    const user_token = req.query.token;
    if (!user_token) {
        return res.status(404).json({
            data: "you are not login"
        });
    }
    try {
        const user_id = findIdFromToken(user_token);
        const user = await User.findById(user_id);
        res.json({
            data: user
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "interna server error"
        });
    }
}
module.exports.user_post = async (req, res) => {
   try {
        const { text, token } = req.query;
        const user_id = findIdFromToken(token);
        let userPosts = new Posts({
            text: text,
            user: user_id
        });
        if(req.file){
            userPosts.filename=req.file.filename;
            userPosts.filepath=userPostFileLocation+req.file.filename;
        }
        await userPosts.save();
        res.status(200).json({
            data: "posted"
        });
    } catch (error) {
        console.log("3");
        console.log(error);
        res.status(500).json({
            error: "interna server error"
        });   
    }
  
}

module.exports.user_own_posts = async (req, res) => {
    const user_id = findIdFromToken(req.query.token);
    try {
        const result = await Posts.find({ user: user_id}).sort({date: -1});
        res.status(200).json({
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "interna server error"
        });
    }

}
module.exports.fetch_all_posts=async (req,res) =>{
    const user_id = findIdFromToken(req.query.token);
    try{
    const result = await Posts.find().sort({date: -1}).populate('user');
    const allusers = await User.find({ _id: { $ne: user_id } }).sort({date: -1}).limit(5);
    const logeddinUser=await User.findById(user_id).select({name:1,profile_pic:1,_id:0}); 
    const userCount=await User.count({ _id: { $ne: user_id } });  //means id!=user_id
    // const singleUserPost= await Posts.find({user:user_id}).select({filepath:1,_id:0}).sort({date: -1});
   
        res.status(200).json({
            data:result,
            users:allusers,
            singleuser:logeddinUser,
            usercount:userCount
        });
    }catch (error) {
        console.log(error);
        res.status(500).json({
            error: "interna server error"
        });
    }
}
module.exports.update_profile_pic=async(req,res)=>{
    try {
        const user_id = findIdFromToken(req.query.token);
        if(req.file){
            const dpPath=userDpLocation+req.file.filename;
            const update=await User
                        .updateOne({_id:user_id},{       //where id =
                        $set:{profile_pic:dpPath},        
                        })
        }
        res.status(200).json({
            status:true,
            data:"update_pic"
            })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "interna server error"
        });
        
    }

}
module.exports.user_name_list=async (req,res)=>{
    try {
        const user_id = findIdFromToken(req.query.token);
        const allusers = await User.find({ _id: { $ne: user_id } }).select({name:1,profile_pic:1}).sort({date: -1})
        console.log(allusers);
        res.status(200).json({
            status:true,
            data:allusers
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "interna server error"
        });
    }
}
/*
module.exports.fetch_all_users=async (req,res) =>{
    try{
    const allusers = await User.find().sort({date: -1});
        console.log(allusers)
        res.status(200).json(allusers);
    }catch (error) {
        console.log(error);
        res.status(500).json({
            error: "interna server error"
        });
    }
}*/