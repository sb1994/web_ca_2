import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Post from "./Post";
import PostContentForm from "./PostContentForm";
class PostFeed extends Component {
  render() {
    const posts = this.props.posts.map(post => (
      <Post key={post._id} post={post} />
    ));

    return (
      <div className="col-md-9">
        {this.props.auth.isAuthenticated ? (
          <PostContentForm post_feed={this.props.feed_id} />
        ) : (
          <div className="col-md-12">
            <p>
              Please <Link to="/login">Login</Link> to post
            </p>
          </div>
        )}
        {posts}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(PostFeed);
