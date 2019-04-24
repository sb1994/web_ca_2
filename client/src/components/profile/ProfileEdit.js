import React, { Component } from "react";
import { connect } from "react-redux";
import { authEditUser, getCurrentUser } from "../../actions/auth";
class ProfileEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.auth.user.name,
      email: this.props.auth.user.email,
      profile_pic: this.props.auth.user.profile_pic,
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (
      !this.props.auth.isAuthenticated ||
      this.props.auth.user.id !== this.props.match.params.id
    ) {
      this.props.history.push("/");
    } else {
      this.props.getCurrentUser(this.props.auth.user.id);
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const updateUser = {
      id: this.props.auth.user.id,
      name: this.state.name,
      email: this.state.email,
      profile_pic: this.state.profile_pic
    };
    this.props.authEditUser(updateUser);
    this.props.history.push("/");
  }
  render() {
    const style = {
      height: 100,
      paddingTop: 10
    };
    return (
      <div>
        <h2>Edit Profile</h2>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                {/* <span>{errors.email}</span> */}
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="profile_pic">Profile Picture Url</label>
                <input
                  type="text"
                  name="profile_pic"
                  id="profile_pic"
                  className="form-control"
                  value={this.state.profile_pic}
                  onChange={this.handleChange}
                />
                <img
                  src={this.state.profile_pic}
                  alt=""
                  className="rounded"
                  style={style}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
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
  { authEditUser, getCurrentUser }
)(ProfileEdit);
