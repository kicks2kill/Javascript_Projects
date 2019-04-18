const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./api/users');
const profile = require('./api/profile');
const posts = require('./api/posts');


const app = express();

//Body Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//DB config
const db = require('./config/keys').mongoURI;

//connect to mongoDB through mongoose
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

app.get('/',(req,res) => {
    res.send('Hello!');
});

//Use routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);


const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`Server running on ${port}`));

