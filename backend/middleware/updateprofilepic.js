const path = require('path');
const multer = require("multer");
//set storage engine
const storage = multer.diskStorage({
    destination: process.env.USERPOST_PROFILE_PIC_LOCATION, 
    filename:function (req, file, cb) {
        cb(null, 'dp' + '-' + Date.now() + path.extname(file.originalname));
        // console.log(path.extname(file.originalname))
    }
});
//init upload
const updatePic = multer({
    storage: storage
});

module.exports=updatePic;