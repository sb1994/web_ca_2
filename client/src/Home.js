import React, { Component } from 'react';
import { map } from 'lodash';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: '', lastName: '', lastNameSearch: '', currentPage: 1 };
  }

  
  render() {
    return (
      <div>
        <Link to="/person">Add Person</Link><br/>
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