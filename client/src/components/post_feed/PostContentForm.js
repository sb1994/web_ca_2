import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserPost } from "../../actions/post";
class PostContentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      content: this.state.content,
      name: user.name,
      profile_pic: user.profile_pic,
      post_feed: this.props.post_feed
    };

    this.props.addUserPost(newPost);
    this.setState({ content: "" });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h2>Tell us how you feel </h2>
              <input
                type="text"
                name="content"
                id="content"
                className="form-control"
                value={this.state.content}
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
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
  { addUserPost }
)(PostContentForm);
