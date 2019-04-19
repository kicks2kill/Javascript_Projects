const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');


//load input validation
const validateRegisterINput = require('../../validation/register');

//Load User Model
const User = require('../models/User');



//@route GET api/users/test
//@desc     Tests user route
//@access   public 
router.get('/test', (req,res) => res.json({msg: "Users works!"}));



//@route GET api/users/register
//@desc     Register route
//@access   public 
router.post('/register',(req,res) => {

    const { errors, isValid} = validateRegisterINput(req.body);

    //check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({email: req.body.email})
    .then(user => {
        if(user) {
            errors.email = 'Email already exsits';
            return res.status(400).json(errors);
        } else {

            const avatar = gravatar.url(req.body.email, {
                s: '200', //size
                r: 'pg', //rating
                d: 'mm' //Default
            });

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar: avatar,
                password: req.body.password,
            });
            bcrypt.genSalt(10,(err,salt) => {
                bcrypt.hash(newUser.password, salt, (err,hash) =>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                })
            })
        }
    })
});

//@route GET api/users/login
//@desc     Login user/ returning JWT Token
//@access   public 
router.post('/login',(req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    //find the user by email
    User.findOne({email})
    .then(user => {
        //Check for user
        if(!user) {
            return res.status(404).json({email: 'User email not found'});
        }
        //Check password
        bcrypt.compare(password,user.password)
        .then(isMatch => {
            if(isMatch){
               //User matched
                const payload = { id: user.id, name: user.name, avatar: user.avatar  } //Create JWT payload

               //sign the token
                jwt.sign(payload,keys.secretOrKey, {  expiresIn: 3600  }, (err,token) => {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    });
                });
            } else {
                return res.status(400).json({password: 'Password incorrect'});
            }
        });
    });
});

//@route GET api/users/current
//@desc     Return current user
//@access   private 

router.get('/current',passport.authenticate('jwt', {session: false}, (req,res) => {
    res.json(req.user);
}));

module.exports = router;