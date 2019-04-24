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
//creates the new post based on the
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newPost = new Post({
      content: req.body.content,
      name: req.body.name,
      post_feed: req.body.post_feed,
      profile_pic: req.body.profile_pic,
      user: req.user.id
    });
    // res.json({ post: newPost });
    newPost.save().then(post => res.json(post));
  }
);
module.exports = router;
