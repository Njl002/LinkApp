import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { navConsts } from '../../constants';

import LinksView from '../links/LinksView';
import LinkProfileView from '../links/link_profile/LinkProfileView';
import UserProfileView from '../user_profile/UserProfileView';
import MessagesView from '../messages/MessagesView';

export default class Main extends Component {
  render() {

    const {
      HOMEPAGE,
      LINKPROFILE,
      USERPROFILE,
      MESSAGES
    } = navConsts;

    return (
      <Switch>
        <Route
          exact path="/"
          component={LinksView}
        />
        <Route
          exact path={"/" + LINKPROFILE}
          component={LinkProfileView}
        />
        <Route
          exact path={"/" + USERPROFILE}
          component={UserProfileView}
        />
        <Route
          exact path={"/" + MESSAGES}
          component={MessagesView}
        />

      </Switch>
    );
  }
}