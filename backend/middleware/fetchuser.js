const jwt=require("jsonwebtoken");
const secret_key=process.env.SECRET_KEY;
const fetchuser=(req,res,next)=>{
    const token=req.cookies.jwt;
    if(!token){
        res.status(404).json({
            data:"you are not login"
        });
    }
    try{
        const data=jwt.verify(token,secret_key);   //break the token
        req.user= data.id;     //set the user database id globally
        next();
    }catch(error){
        console.log(error);
        res.status(500).json({
            error:"interna server error"
        });
    }
}
module.exports={fetchuser};