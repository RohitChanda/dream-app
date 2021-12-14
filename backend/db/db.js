const mongoose=require("mongoose");
// const DB="mongodb://localhost:27017/dreamapp";
const DB="mongodb+srv://rohit:mydb@cluster0.yeqxw.mongodb.net/dreamApp?retryWrites=true&w=majority";
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("connection Sucessfull"))
.catch((err)=>console.log(err));
