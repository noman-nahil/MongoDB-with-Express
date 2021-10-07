const { Schema, model } = require('mongoose');

const User = model('User', Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 8
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    }

}));

exports.User = User;