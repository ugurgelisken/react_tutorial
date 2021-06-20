
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from "./components/login/Login";
import Users from "./components/users/Users";
import UserDetails from "./components/user_details/UserDetails";

import './App.css';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/users" component={Users} />
              <Route path="/user/:id" component={UserDetails} />
              <Route component={Login} />
            </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}