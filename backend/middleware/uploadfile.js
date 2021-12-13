const path = require('path');
const multer = require("multer");
//set storage engine
const storage = multer.diskStorage({
    destination: process.env.USERPOST_FILE_LOCATION,
    filename:function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        // console.log(path.extname(file.originalname))
    }
});
//init upload
const upload = multer({
    storage: storage
});

module.exports=upload;