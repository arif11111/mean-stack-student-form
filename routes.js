var express = require('express');
var router = express.Router();
var Student = require('./model');
router.get('/', function(req, res){
     Student.getStudents(function(err,students){
         if(err) throw err;
         res.json(students);
     });
 })
router.post('/', function(req, res){
    var newStudent = {
        name: req.body.name,
        age : req.body.age,
        gender : req.body.gender,
        qualification : req.body.qualification,
        status : req.body.status,
        course : req.body.course
    }
     Student.addStudent(newStudent,function(err,student){
         if(err) throw err;
         res.json(student);
     });
 })
 router.put('/:_id', function(req, res){
     var update = {
        name: req.body.name,
        age : req.body.age,
        gender : req.body.gender,
        qualification : req.body.qualification,
        status : req.body.status,
        course : req.body.course
    }
     Student.updateStudent(req.params._id , update, function(err,student){
         if(err) throw err;
         res.json(student);
     });
 })
 router.delete('/:_id', function(req, res){
     
     Student.deleteStudent(req.params._id ,  function(err,student){
         if(err) throw err;
         res.json(student);
     });
 })
 router.get('/:_id', function(req, res){
    
     Student.getStudent(req.params._id , function(err,student){
         if(err) throw err;
         res.json(student);
     });
 })
module.exports = router;