//Express
const express = require('express');
const app = express();
const studentRouter = require('./routers/studentRouters')
const userRouter = require('./routers/userRouter')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my-students-2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Connection Failed"));

app.use(express.json());
app.use('/api/students', studentRouter);
app.use('/register', userRouter);


const port = 3000;

app.listen(port, () => {
    console.log('App listening on port ' + port + '!');
});

