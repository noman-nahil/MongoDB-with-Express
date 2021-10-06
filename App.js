//Express
const express = require('express');
const app = express();
const studentRouter = require('./routers/studentRouters')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my-students-2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Connection Failed"));

app.use(express.json());
app.use('/api/students', studentRouter);


const port = 3000;

app.listen(port, () => {
    console.log('App listening on port ' + port + '!');
});

