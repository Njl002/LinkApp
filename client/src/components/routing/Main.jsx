import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { navConsts } from '../../constants';

import LoginRedirect from './LoginRedirect';
import LaunchView from '../launch/LaunchView';
import LoginView from '../login/LoginView';
import LinksView from '../links/LinksView';
import LinkProfileView from '../links/link_profile/LinkProfileView';
import UserProfileView from '../user_profile/UserProfileView';
import MessagesView from '../messages/MessagesView';
import OnboardingView from '../onboarding/OnboardingView';
import NavBar from '../nav_bar/NavBar'

import UserSession from '../../storage/UserSession';

import './Main.css';


export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isAuthenticated: false,
      userId: ""
    }
    this.handleUserSessionUpdate = this.handleUserSessionUpdate.bind(this);
  }

  componentDidMount() {
    let priorUsername = UserSession.getUsername() || null;
    let priorAuthentication = UserSession.getAuthenticated() || false;
    let priorId = UserSession.getId() || null;
    UserSession.setUsername(priorUsername);
    UserSession.setAuthenticated(priorAuthentication);
    UserSession.setId(priorId);

    this.setState({username: priorUsername, isAuthenticated: priorAuthentication, userId: priorId});
  }

  handleUserSessionUpdate(username, isAuthenticated, userId) {
    UserSession.setUsername(username);
    UserSession.setAuthenticated(isAuthenticated);
    UserSession.setId(userId);

    this.setState({username: username, isAuthenticated: isAuthenticated, userId: userId});
  }

  render() {

    const {
      LAUNCH,
      LOGIN,
      LINKS,
      LINKPROFILE,
      USERPROFILE,
      MESSAGES,
      ONBOARDING
    } = navConsts;

    return (
    <div className="main">
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
            exact path={"/" + LAUNCH}
            render={() => (
              <LoginRedirect 
                isAuthenticated={this.state.isAuthenticated}
              />)}
          />
          ) : (
          <Route
            exact path={"/" + LAUNCH}
            render={() => (
              <LaunchView 
                onBackClick={this.handleBackToLaunch}
              />)}
          />
        )}

        {this.state.isAuthenticated ? (
          <Route
            exact path={"/" + LOGIN}
            render={() => (
              <LoginRedirect 
                isAuthenticated={this.state.isAuthenticated}
              />)}
          />
          ) : (
          <Route
            exact path={"/" + LOGIN}
            render={() => (
              <LoginView 
                onUserSessionUpdate={this.handleUserSessionUpdate}
              />)}
          />
        )}
        
        <Route
          exact path={"/" + LINKS}
          render={() => (
            <LinksView 
              userId={this.state.userId}
            />
          )}
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

        <Route
          exact path={"/" + ONBOARDING}
          render={() => (
            <OnboardingView 
              onUserSessionUpdate={this.handleUserSessionUpdate}
            />)}
        />

      </Switch>
      {this.state.isAuthenticated && (
        <NavBar userId={this.state.userId}/>
      )}
    </div>
    );
  }
}