import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { navConsts } from '../../constants';

import LoginRedirect from './LoginRedirect'
import LoginView from '../login/LoginView';
import LinksView from '../links/LinksView';
import LinkProfileView from '../links/link_profile/LinkProfileView';
import UserProfileView from '../user_profile/UserProfileView';
import MessagesView from '../messages/MessagesView';
import NavBar from '../nav_bar/NavBar'

import UserSession from '../../backend/UserSession';


export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isAuthenticated: false
    }
    this.handleUserSessionUpdate = this.handleUserSessionUpdate.bind(this);
  }

  componentDidMount() {
    let priorUsername = UserSession.getUsername() || null;
    let priorAuthentication = UserSession.getAuthenticated() || false;
    UserSession.setUsername(priorUsername);
    UserSession.setAuthenticated(priorAuthentication);

    this.setState({username: priorUsername, isAuthenticated: priorAuthentication});
  }

  handleUserSessionUpdate(username, isAuthenticated) {
    UserSession.setUsername(username);
    UserSession.setAuthenticated(isAuthenticated);

    this.setState({username: username, isAuthenticated: isAuthenticated});
  }

  render() {

    const {
      LOGIN,
      LINKS,
      LINKPROFILE,
      USERPROFILE,
      MESSAGES
    } = navConsts;

    return (
    <div>
      <Switch>

        <Route
          exact path="/"
          render={() => (
            <LoginRedirect 
              isAuthenticated={this.state.isAuthenticated}
            />
          )}
        />
        {this.state.isAuthenticated ? (
          <Route
            exact path={"/" + LOGIN}
            render={() => (
              <LoginRedirect 
                isAuthenticated={this.state.isAuthenticated}
              />
            )}
          />
          ) : (
          <Route
            exact path={"/" + LOGIN}
            render={() => (
              <LoginView 
                onUserSessionUpdate={this.handleUserSessionUpdate}
              />
            )}
          />
        )}
        
        <Route
          exact path={"/" + LINKS}
          component={LinksView}
        />
        <Route
          exact path={"/" + LINKPROFILE + "/:id"}
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
      <div>
      {this.state.isAuthenticated && (
        <NavBar />
      )}
      </div>
    </div>
    );
  }
}