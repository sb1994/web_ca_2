import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      lastNameSearch: "",
      currentPage: 1
    };
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

// function mapStateToProps(persons) {
//     return {
//         persons: persons.persons,
//         maxPersonsReturned: persons.persons.maxPersonsReturned,
//         totalPersonsCount: persons.persons.totalPersonsCount
//     };
// }

// export default connect(mapStateToProps, actions)(Home);
export default Home;
