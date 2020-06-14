const express =  require('express');
const app = express();
const mongoose = require('mongoose');
require ('dotenv/config');


app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Import Routes
const postsRoute = require('./routes/posts.js');
const bodyParser = require('body-parser');
//Middleware
app.use('/posts',postsRoute);

app.get('/', (req, res) => {
    res.send("We are on home");
});


//Connect to dB
mongoose.connect(process.env.DB_CONNECTION,
 { useNewUrlParser: true },
 () => console.log("connected to MongoDB"));

//listen to server
app.listen(3000);