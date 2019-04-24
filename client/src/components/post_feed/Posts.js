import React, { Component } from "react";

import { connect } from "react-redux";
import { getUserPosts } from "../../actions/post";
import PostFeed from "./PostFeed";
class Posts extends Component {
  componentDidMount() {
    // this.getUserPosts()
    this.props.getUserPosts(this.props.feed_id);
  }
  render() {
    const { posts } = this.props.post;
    return (
      <div className="col-md-9">
        <PostFeed posts={posts} feed_id={this.props.feed_id} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  post: state.post
});
export default connect(
  mapStateToProps,
  { getUserPosts }
)(Posts);
