const mongoose=require("mongoose");
// const DB="mongodb://localhost:27017/dreamapp";
const DB=process.env.DATABASE;
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("connection Sucessfull"))
.catch((err)=>console.log(err));
