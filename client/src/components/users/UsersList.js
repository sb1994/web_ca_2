import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard";
class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios
      .get("api/users/all")
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    console.log(this.state.users);

    const userCardList = this.state.users.map((user, index) => (
      <UserCard key={index} user={user} />
    ));
    return <div className="row">{userCardList}</div>;
  }
}
export default UsersList;
