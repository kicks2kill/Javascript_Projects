const express =  require('express');
const router = express.Router();
const Post = require('../models/Post');

//ROUTES
router.get('/posts', (req, res) => {
    res.send("We are on posts");
});

router.get('/specific', (req, res) => {
    res.send("Specific posts");
});

router.post('/',  async (req,res) => {
    //console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch {
        res.json({ message: err});
    }
});


module.exports = router;