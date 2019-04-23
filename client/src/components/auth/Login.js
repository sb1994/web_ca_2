import React, { Component } from "react";
import { connect } from "react-redux";
import { authLoginUser } from "../../actions/auth";

class Login extends Component {
  constructor(props) {
    super(props);

    //default state
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    //stops the default behaviour of the
    e.preventDefault();

    //creates a user object that will be
    //sent to the auth action in
    // the reducer
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.authLoginUser(userData);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push(`/profile/${this.props.auth.user.id}`);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push(`/profile/${nextProps.auth.user.id}`);
      console.log(nextProps);
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <div className="row">
          <div className="col-md-12">
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
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handleChange}
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
  auth: state.auth,
  errors: state.errors,
  user: state.user
});

export default connect(
  mapStateToProps,
  { authLoginUser }
)(Login);
