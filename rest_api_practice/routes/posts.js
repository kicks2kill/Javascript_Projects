const express =  require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET BACK ALL POSTS
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }catch(err) {
        res.json({message: err});
    }
});
//SUBMITS A POST
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

router.get("/:postId", (req, res) => {
    console.log(req.params.postId);
})

module.exports = router;