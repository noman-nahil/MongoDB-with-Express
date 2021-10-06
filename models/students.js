const { Schema, model } = require('mongoose');

const Student = model('Student', Schema({
    name: { type: String },
    age: { type: Number, min: 0 },
    hobbies: {
        type: Array,
        of: String,
        validate: {
            validator: (value) => value.length > 0,
            message: "There must be at least one hobby!",
        },
    }
}));

exports.Student = Student;