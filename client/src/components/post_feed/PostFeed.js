import React, { Component } from "react";
import { connect } from "react-redux";

import Post from "./Post";
class PostFeed extends Component {
  render() {
    return (
      <div className="col-md-9">
        <h2>Post Feed</h2>
        <Post />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth
});
export default connect(mapStateToProps)(PostFeed);
