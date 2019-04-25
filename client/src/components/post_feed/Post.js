import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
import { deleteUserPost } from "../../actions/post";
class Post extends Component {
  handleDeleteClick = id => {
    this.props.deleteUserPost(id);
  };
  render() {
    const { post } = this.props;
    const date = moment(post.date).format("YYYY-MM-DD h:mm");

    return (
      <div className="col-md-12 p-2">
        <div className="card">
          <div className="card-header">
            {date}
            {post.post_feed === this.props.auth.user.id ? (
              <button
                onClick={this.handleDeleteClick.bind(this, post._id)}
                type="button"
                className="btn btn-sm btn-danger mr-1 float-right"
              >
                <i className="fas fa-times" />
              </button>
            ) : (
              <span />
            )}
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3 ">
                <img
                  style={{ height: 75 }}
                  className="rounded"
                  src={post.profile_pic}
                />
                <p>{post.name}</p>
              </div>
              <div className="col-md-9">
                <p className="card-text">{post.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteUserPost }
)(Post);
