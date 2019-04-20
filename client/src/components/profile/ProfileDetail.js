import React, { Component } from 'react'

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileThumbnail from "./ProfileThumbnail";
class ProfileDetail extends Component {
  componentDidMount(){
    console.log(this.props.user.user);
    
  }
  render() {
    
    return (
      <div className="row">
        <ProfileThumbnail/>    
        
      </div>
    )
  }
}
const mapStateToProps = state => ({
  user: state.auth
});
export default connect(mapStateToProps)(ProfileDetail);