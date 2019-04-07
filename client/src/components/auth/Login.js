import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)

    //default state 
    this.state={
      email:'',
      password:''
    }
  }
  handleSubmit = e => {
    //stops the default behaviour of the 
    e.preventDefault();

    //creates a user object that will be 
    //sent to the auth action in
    // the reducer
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(userData);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" className="form-control" value={this.state.email} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" className="form-control" value={this.state.password} onChange={this.handleChange}/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Login