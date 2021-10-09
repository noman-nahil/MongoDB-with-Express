const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
//Express
const express = require('express');
const app = express();
const studentRouter = require('./routers/studentRouters')
const userRouter = require('./routers/userRouter')
const authRouter = require('./routers/authRouter')
const morgan = require('morgan');



if (process.env.NODE_ENV === 'development') {
    console.log("Development")
    app.use(morgan('dev'));
}
const STUDENTS = process.env.STUDENTS;
const REGISTER = process.env.REGISTER;
const LOGIN = process.env.LOGIN;

app.use(express.json());
app.use(STUDENTS, studentRouter);
app.use(REGISTER, userRouter);
app.use(LOGIN, authRouter);


module.exports = app;

