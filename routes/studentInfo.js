const express = require('express');
const router = express.Router();
const Student= require('../models/students');


router.get('/' , async(req, res) => {
    try{
        const students=await Student.find();
        res.json(students);
    }
    catch(err){
        res.send('Error: '+err);
    }

});

router.get('/:id' , async(req, res) => {
    try{
        const student=await Student.findById(req.params.id);
        res.json(student);
    }
    catch(err){
        res.send('Error: '+err);
    }

});

router.post('/' , async(req,res) =>{

    const student = new Student({
        id:req.body.id,
        name:req.body.name,
        rollno:req.body.rollno
    });

    try{
        const student1 = await student.save();
        res.json(student1);
    }

    catch(err){
        res.send('Error: '+err);
    }
});

//Update
router.patch('/:id' , async(req,res) =>{
    try{
        const student = await Student.findById(req.params.id);
        student.id = req.body.id;
        student.name = req.body.name;
        student.rollno = req.body.rollno;
        const student1 = await student.save();
        res.json(student1);
    }
    catch(err){
        req.send("Error");
    }
});

module.exports = router;
