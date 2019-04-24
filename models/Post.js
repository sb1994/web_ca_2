const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
// Create Schema
const PostSchema = new Schema({
  //makes reference to the user who created the post
  post_feed: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  content: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  profile_pic: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
