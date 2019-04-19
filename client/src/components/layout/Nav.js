import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutCurrentUser } from '../../actions/auth';
// import { clearCurrentProfile } from '../../actions/profileActions';
class Nav extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const loggedInLinks=(
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            {user.id}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            Disabled
          </a>
        </li>
      </ul>
    )
    const loggedOutLinks=(
      <ul className="navbar-nav ml-auto">
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
    )
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        {isAuthenticated ? loggedInLinks : loggedOutLinks}
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutCurrentUser})(
  Nav
);