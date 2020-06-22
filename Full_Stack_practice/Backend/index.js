const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());

let users = [{Name: "Jim", Password: "12345"}];

app.post('/',(req,res) => {
    let userName = users[0];
    let userPassword = users[1];
    if(userName === 0) return ;
    users.push(userName, userPassword);
    res.json(users);
});

app.get('/', (req,res) => {
    let userName = users[0];
    let userPassword = users[1];
    if(userName === 0) return ;
    users.push(userName, userPassword);
    res.json(users);
})





app.post('/register', (req, res) => {
    let registerData = req.body;
    let newIdx = users.push(registerData);
    let userId = newIdx - 1;
    
    let token = jwt.sign(userId, '12345');
    res.json(token);
});

app.post('/login', (req, res) => {
    let loginData = req.body;
    let userId = users.findIndex(user => user.userName === loginData.userName);

    if(userId == -1 ) 
        return res.status(401).send({message: 'Name or password is invalid'});

    if(users[userId].password != loginData.password)
        return res.status(401).send({message: 'Name or password is invalid'});

    let token = jwt.sign(userId, '12345');
    res.json(token);
});

app.listen(3000);