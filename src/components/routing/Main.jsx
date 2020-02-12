import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { navConsts } from '../../constants';

import HomeView from '../links/HomeView';
import ProfileView from '../links/link_profile/ProfileView';
import UserView from '../user_profile/UserView';
import MessagesView from '../messages/MessagesView';

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