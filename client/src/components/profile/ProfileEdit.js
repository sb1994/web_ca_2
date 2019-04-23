import React, { Component } from "react";
import { connect } from "react-redux";
class ProfileEdit extends Component {
  render() {
    return (
      <div>
        <p>Edit Profile Page</p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth
});
export default connect(mapStateToProps)(ProfileEdit);
