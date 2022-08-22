const express = require('express');
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({  
    enrollment : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    father_Name : {
        type : String,
        required : true
    },
    dob : {
        type : String,
        required : true
    },
    section : {
        type : String,
        required : true
    }
});

const Student = mongoose.model("Students",studentSchema);

module.exports = Student;