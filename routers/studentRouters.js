const express = require('express');
const router = express.Router();
const { Student } = require('../models/students')

//Named Function
const studentList = (req, res) => { }


const newStudent = async (req, res) => {
    //const student = req.body;
    const student = new Student(req.body);
    try {
        const result = await student.save();
        res.send(result);
    }
    catch (err) {
        //console.log()
        const errMsg = [];
        for (field in err.errors) {
            errMsg.push(err.errors[field].message);
        }
        return res.status(400).send(errMsg);
    }

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