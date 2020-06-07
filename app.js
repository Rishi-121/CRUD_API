const express = require('express');
const mongoose = require('mongoose');
const url='mongodb://localhost/StudentDB';

const app = express();

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true});
const con = mongoose.connection;

con.on('open' , () => {
    console.log('Connected...');
});

app.use(express.json());

const studentRouter = require('./routes/studentInfo');
app.use('/studentInfo', studentRouter);  //Middleware

app.listen(9000, () => {
    console.log("Server started");
});



