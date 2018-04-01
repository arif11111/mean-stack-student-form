var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var config = "mongodb://localhost:27017/Mean";
mongoose.connect(config);
 let db = mongoose.connection;
        db.once('open',function(){
            console.log("successfully connected to "+ config);
        })
        db.on('error',function(err){
            console.log("database error "+ err);
        })
var app = express();
var port = 3000 ;
app.get('/', function(req, res){
    res.send("Hello, this is the server...");
});
var router = require('./routes');
//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/students', router);
app.listen(port, function(){
    console.log("server is running on port  "+ port);
})