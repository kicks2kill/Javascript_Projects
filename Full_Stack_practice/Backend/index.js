const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');


const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 3000;

var users = [{userName: "Robert", password: "123456"}];

app.get('/Login', (req,res) => {
    let loginData = req.body;

    let userId = users.findIndex(user => user.userName === loginData.userName);

    if(userId == -1) {
        return res.status(401).send({message: 'Name or Password is invalid. Please try again'});
    }
    if(users[userId].password !== loginData.password) {
        return res.status(401).send({message: "Name or Password is invalid. Please try again"});
    }
    let token = jwt.sign(userId,'123456');
    res.send(token);
});

app.get('/Home', (req,res) => {
    if(users === null) return;
//TODO: Check if users token is signed, if so then grant access.
    res.send(users);
});

app.listen(port, () => console.log(`Server running at ${port}`));