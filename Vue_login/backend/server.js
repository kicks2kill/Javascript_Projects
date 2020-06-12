const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/messages', (req, res) =>{
    const messages = ["h", "1", "something else"];

    res.send(messages);
});

app.post('/messages', (req,res) => {
    console.log(req.body);
    res.json({});
});

app.listen(port, () => console.log('App is running'));
