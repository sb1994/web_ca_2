import React, { Component } from 'react'
import axios from 'axios'
class Register extends Component {
  constructor(props){
    super(props)

    this.state={
      name:'',
      email:'',
      password:'',
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post('/api/users/register',newUser)
      .then((res)=>{
        const {errors} = res
        if(res.errors){
          this.setState({errors:errors})
        }else{
          console.log('Registerd successfully');
        }
      })
      .catch(err=>{
        console.log(err);
      })

  }
  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" className="form-control" value={this.state.email} onChange={this.handleChange}/>
                <span>{errors.email}</span>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className="form-control" value={this.state.name} onChange={this.handleChange}/>
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
export default Register