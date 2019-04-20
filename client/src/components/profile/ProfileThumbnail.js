import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProfileThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }
  render() {
    const { user } = this.state;
    return (
      <div className="col-md-3 card">
        <Link to={`/profile/${user.id}`}>
          <img className="card-img-top" src={user.profile_pic} alt="Card image" />
        </Link>
        <div className="card-body">
          <p>{user.name}</p>
        </div>
      </div>
    );
  }
}
export default ProfileThumbnail;
