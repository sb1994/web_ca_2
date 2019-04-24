import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import { authDeleteUser } from "../../actions/auth";
class ProfileThumbnail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleted: false
    };
    this.onHandleEditClick = this.onHandleEditClick.bind(this);
    this.onHandleDeleteClick = this.onHandleDeleteClick.bind(this);
  }

  onHandleEditClick = e => {
    this.props.history.push(`/profile/${this.props.auth.user.id}`);
  };
  onHandleDeleteClick = () => {
    this.props.authDeleteUser(this.props.auth.user.id);
    this.props.history.push("/");

    // if (!this.props.auth.isAuthenticated) {
    //   this.props.history.push("/");
    // }
  };
  render() {
    //user from the redux object
    const { isAuthenticated, user } = this.props.auth;
    //user passed from the props
    const propsUser = this.props.user;
    //formats the date
    const date = moment(propsUser.joined).format("YYYY");

    return (
      <div className="col-md-3 card">
        <Link to={`/profile/${propsUser._id}`}>
          <img
            style={{ height: 275 }}
            className="card-img-top"
            src={propsUser.profile_pic}
            alt="Card image"
          />
        </Link>
        <div className="card-body">
          <h4 className="card-title">{propsUser.name}</h4>
          <p className="text-muted">
            Joined: <span>{date}</span>
          </p>
          <p className="text-muted">
            Email: <span>{propsUser.email}</span>
          </p>
          {//checks wheter the user is authenticted and wether they can update the profie , or delete the profile
          isAuthenticated && propsUser._id === user.id ? (
            <div>
              <Link className="btn" to={`/profile/edit/${user.id}`}>
                <span className="far fa-edit" />
              </Link>
              <button
                className="fas fa-trash"
                onClick={this.onHandleDeleteClick}
              />
            </div>
          ) : (
            ""
          )}
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
  { authDeleteUser }
)(ProfileThumbnail);
