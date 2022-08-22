const express = require('express');
const router = new express.Router();

const Student = require('../Models/Students');

router.post('/shubhamjain287/students', async (req,res) => {
    try{
        const addStudent = new Student(req.body);
        const data = await addStudent.save();
        res.status(201).send(data);
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.get('/students', async (req,res) => {
    try {
        const data = await Student.find({}).sort({"enrollment" : 1});
        res.status(201).send(data);    
    }
    catch (err) {
        res.status(400).send(err);
    }
})

router.get('/students/:enrollment', async (req,res) => {
    try {
        const enrollment = req.params.enrollment ;
        const data = await Student.find({enrollment});
        res.status(201).send(data);    
    }
    catch (err) {
        res.status(400).send(err);
    }
});

router.patch('/shubhamjain287/students/:id',async (req,res) => {
    try {
        const _id = req.params.id ;
        const data = await Student.findByIdAndUpdate(_id,req.body,{new : true});
        res.status(201).send(data);

    }
     catch (err) {
         res.status(500).send(err);

        }
    });
    
    router.delete('/shubhamjain287/students/:id',async (req,res)=>{
        try {
            const _id = req.params.id ;
            const data = await Student.findByIdAndDelete(_id);
            res.status(200).send(data);
        }
        catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router ;