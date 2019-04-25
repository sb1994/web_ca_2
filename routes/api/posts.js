const express = require("express");
const router = express.Router();
const passport = require("passport");

const Post = require("../../models/Post");
const User = require("../../models/User");

router.get("/test", (req, res) =>
  res.json({
    msg: "User Test Paths Work"
  })
);
//get all posts
router.get("/", (req, res) => {
  Post.find()
    .sort({ created: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
});
//get all post by post_feed
router.get("/:post_feed", (req, res) => {
  Post.find({ post_feed: req.params.post_feed })
    .sort({ created: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
});
//get ingle post by id
router.get("/:id", (req, res) => {
  Post.find({ _id: req.params.id })
    .then(posts => res.json(post))
    .catch(err => res.status(404).json({ nopostfound: "No post found" }));
});
//delete a post
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findOne({ user: req.user.id }).then(user => {
      Post.findById(req.params.id)
        .then(post => {
          // Check for post owner
          if (post.post_feed.toString() === req.user.id) {
            post.remove().then(() => res.json({ success: true }));
          }

          // Delete
        })
        .catch(err => res.status(404).json({ postnotfound: "No post found" }));
    });
  }
);

//creates the new post based on the user id passed over via paassport
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.user.id);
    const newPost = new Post({
      content: req.body.content,
      // name: req.body.name,
      post_feed: req.body.post_feed,
      // profile_pic: req.body.profile_pic,
      user: req.user.id
    });
    User.findOne({ _id: newPost.user }).then(user => {
      // console.log(user);
      newPost.profile_pic = user.profile_pic;
      newPost.name = user.name;
      newPost.save().then(post => res.json(post));
    });
  }
);

module.exports = router;
