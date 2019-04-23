import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutCurrentUser,clearCurrentUser } from "../../actions/auth";
// import { clearCurrentProfile } from '../../actions/profileActions';
class Nav extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentUser();
    this.props.logoutCurrentUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const loggedInLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
          <i className="fas fa-user-friends"></i>
            Users
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/sb1994/web_ca_2" target="_blank">
          <i className="fab fa-github"></i>
            Github
          </a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link"to={`/profile/${user.id}`}>
          <i className="fas fa-user"></i>
            View Profile
          </Link> */}
        </li>
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
          <i className="fas fa-sign-out-alt"></i>
          Logout
          </a>
        </li>
      </ul>
    );
    const loggedOutLinks = (
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
          <Link className="nav-link" to="/">
          <i className="fas fa-user-friends"></i>
            Users
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/sb1994/web_ca_2"  target="_blank">
          <i className="fab fa-github"></i>
            Github
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="https://github.com/sb1994/web_ca_2" target="_blank">Web Ca 2</a>
          {isAuthenticated ? loggedInLinks : loggedOutLinks}
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutCurrentUser,clearCurrentUser }
)(Nav);
