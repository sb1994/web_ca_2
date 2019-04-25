import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }
  render() {
    const { user } = this.state;
    return (
      <div className="col-md-3">
        <div className="card">
          <Link to={`/profile/${user._id}`}>
            <img
              style={{ height: 100 }}
              className="card-img "
              src={user.profile_pic}
              alt="Card image"
            />
          </Link>
          <div className="card-body">
            <p>{user.name}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default UserCard;
