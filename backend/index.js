require('dotenv').config()
const express = require('express');
const router=require('./routes/routes');
const app = express();
const bodyParser = require("body-parser");
const cokkieParser=require("cookie-parser");
const port = process.env.PORT || 5000;
const path=require("path");



var cors = require('cors');
app.use(cors());



app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cokkieParser()); // to get the value from cookies in your browser
// app.use(express.static(path.join(__dirname, '../public')));
app.use('/public/uploadfile/userspost',express.static(path.join('public/uploadfile/userspost')));
app.use('/public/uploadfile/userpic',express.static(path.join('public/uploadfile/userpic')));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'/../dist/dream-app/index.html'));
});

//available routes
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);  ////////// this one come fast beacause mongo take time to connect
})