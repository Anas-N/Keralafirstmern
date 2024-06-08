const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Load environment variables from config.env
dotenv.config({ path: './config.env' });

// Access DATABASE and PORT environment variables


require('./db/conn');
// const User = require('./model/userScheama');



app.use(bodyParser.json());

app.use(require('./router/auth'));


const PORT = process.env.PORT;

//middlware
const middlware =(req,res, next) => {
    console.log('hellow my middleware'),
    next();
}

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.get('/contactus', (req, res) => {
    res.send('Contact Us');
});

app.get('/register', (req, res) => {
    res.send('Register');
});

app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`); // Use backticks for string interpolation
});




