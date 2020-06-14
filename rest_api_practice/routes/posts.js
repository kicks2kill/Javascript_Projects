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


//SPECIFIC POST
router.get("/:postId", (req, res) => {
    console.log(req.params.postId);
})


//DELETE POST
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    }catch(err) {
        res.json({message: err});
    }
});

//UPDATE A POST
router.patch('/:postId', async (req,res) =>{
    try {
        Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}});
        res.json(updatedPost);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;