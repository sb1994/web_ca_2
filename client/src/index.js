import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';

//react pages
import Home from './Home';
//auth components
import Login from './components/auth/Login'
import Register from './components/auth/Register'
//profile components
import ProfileDetail from './components/profile/ProfileDetail'
import ProfileEdit from './components/profile/ProfileEdit'
//users components
import UsersList from './components/users/UsersList'

import 'bootstrap/dist/css/bootstrap.css';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile/:id" component={ProfileDetail} />
          <Route exact path="/profile/edit/:id" component={ProfileEdit} />
        </Switch>
      </div>
    </Router>
  </Provider>, 
  document.getElementById('root')
);