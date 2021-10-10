const { Schema, model } = require('mongoose');

const userSchema = Schema({
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

});
userSchema.methods.generateJWT = function () {
    const token = jwt.sign({ _id: this._id, email: this.email }, process.env.mySecretKey);
    return token;
}
const User = model('User', userSchema);


exports.User = User;