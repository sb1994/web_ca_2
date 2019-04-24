import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfileThumbnail from "./ProfileThumbnail";
import PostFeed from "../post_feed/PostFeed";
class ProfileDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    // console.log(this.props.match.params.id);
    axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          user: res.data.user
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const user = this.state.user;
    return (
      <div className="row">
        {/* pass the history object in so that the child compoent can use it */}
        <ProfileThumbnail user={user} history={this.props.history} />
        <PostFeed />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth
});
export default connect(mapStateToProps)(ProfileDetail);
