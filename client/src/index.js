import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//react pages
import Home from './Home';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ProfileDetail from './components/profile/ProfileDetail'
import ProfileEdit from './components/profile/ProfileEdit'

import 'bootstrap/dist/css/bootstrap.css';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
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