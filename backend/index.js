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
app.use(express.static(__dirname + '/dist'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'/dist/dream-app/index.html'));
});
/*
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});*/
//available routes
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);  ////////// this one come fast beacause mongo take time to connect
})