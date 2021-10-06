const express = require('express');
const router = express.Router();
const { Student } = require('../models/students')

//Named Function
const studentList = (req, res) => { }


const newStudent = (req, res) => {
    const student = req.body;

}

const studentDetails = (req, res) => {
    const id = parseInt(req.params.id);
    //console.log(id)

}
const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    //console.log(id)
    const updateInfo = req.body;

}

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    //console.log(id)

}

//Refactoring the routes
router.route('/')
    .get(studentList)
    .post(newStudent);

router.route('/:id')
    .get(studentDetails)
    .put(newStudent).
    delete(deleteStudent);

module.exports = router;