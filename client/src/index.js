import React from "react";
import ReactDOM from "react-dom";
import jwt_decode from 'jwt-decode';
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import setUserToken from "./utils/setUserToken";

import { setLoggedUser, logoutCurrentUser } from "./actions/auth";

//laout components
import Nav from "./components/layout/Nav";
//react pages
import Home from "./Home";
//auth components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
//profile components
import ProfileDetail from "./components/profile/ProfileDetail";
import ProfileEdit from "./components/profile/ProfileEdit";
//users components
import UsersList from "./components/users/UsersList";

import "bootstrap/dist/css/bootstrap.css";

//check wether the user is logged in and token is present
// Check for token
if (localStorage.token) {
  // Set auth token header auth
  setUserToken(localStorage.token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.token);
  // Set user and isAuthenticated
  store.dispatch(setLoggedUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutCurrentUser());
    // // Clear current Profile
    // store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="App">
        <Nav />
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
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
