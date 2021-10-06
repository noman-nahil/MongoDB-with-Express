const express = require('express');
const router = express.Router();
const { Student } = require('../models/students')

//Named Function
const studentList = async (req, res) => {
    const students = await Student.find();
    res.send(students);
}


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

const studentDetails = async (req, res) => {
    const id = req.params.id;
    //console.log(id)
    try {
        const student = await Student.findById(id);
        if (!student) {
            return res.status(404).send("ID not found!")
        }
        res.send(student);
    }
    catch (err) {
        return res.status(404).send("ID not found!")
    }

}
const updateStudent = async (req, res) => {
    const id = req.params.id;
    //console.log(id)
    const updateInfo = req.body;
    try {
        const student = await Student.findByIdAndUpdate(id, { ...updateInfo }, { new: true, useFindAndModify: false })
        if (!student) {
            return res.status(404).send("ID not found!")
        }
        res.send(student);
    }
    catch (err) {
        return res.status(404).send("ID not found!")
    }

}

const deleteStudent = async (req, res) => {
    const id = req.params.id;
    //console.log(id)
    try {
        const student = await Student.findByIdAndDelete(id)
        if (!student) {
            return res.status(404).send("ID not found!")
        }
        res.send(student);
    }
    catch (err) {
        return res.status(404).send("ID not found!")
    }

}

//Refactoring the routes
router.route('/')
    .get(studentList)
    .post(newStudent);

router.route('/:id')
    .get(studentDetails)
    .put(updateStudent).
    delete(deleteStudent);

module.exports = router;