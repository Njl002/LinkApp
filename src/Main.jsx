import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { navConsts } from './constants';

import HomeView from './HomeView';
import ProfileView from './ProfileView';
import UserView from './UserView';
import MessagesView from './MessagesView';

export default class Main extends Component {
  render() {

    const {
      HOMEPAGE,
      PROFILE,
      USERPROFILE,
      MESSAGES
    } = navConsts;

    return (
      <Switch>
        <Route
          exact path="/"
          component={HomeView}
        />
        <Route
          exact path={"/" + PROFILE}
          component={ProfileView}
        />
        <Route
          exact path={"/" + USERPROFILE}
          component={UserView}
        />
        <Route
          exact path={"/" + MESSAGES}
          component={MessagesView}
        />

      </Switch>
    );
  }
}