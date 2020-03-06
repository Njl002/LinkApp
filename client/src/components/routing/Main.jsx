import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { navConsts } from '../../constants';
import ReactGA from 'react-ga';

import LoginRedirect from './LoginRedirect';
import LaunchView from '../launch/LaunchView';
import LoginView from '../login/LoginView';
import LinksView from '../links/LinksView';
import LinkProfileView from '../links/link_profile/LinkProfileView';
import UserProfileView from '../user_profile/UserProfileView';
import MessagesView from '../messages/MessagesView';
import OnboardingView from '../onboarding/OnboardingView';
import OnboardingViewV2 from '../onboardingV2/OnboardingViewV2';
import ChatView from '../messages/chat/ChatView';
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
    this.updateTracking = this.updateTracking.bind(this);
  }

  componentDidMount() {
    let priorUsername = UserSession.getUsername() || null;
    let priorAuthentication = UserSession.getAuthenticated() || false;
    let priorId = UserSession.getId() || null;
    UserSession.setUsername(priorUsername);
    UserSession.setAuthenticated(priorAuthentication);
    UserSession.setId(priorId);

    // Trying to get Google Analytics Working
    ReactGA.initialize('UA-158770874-2');
    // ReactGA.ga('require', 'GTM-P8BTTM4')
    ReactGA.set({
      userId: priorId
    })

    this.setState({username: priorUsername, isAuthenticated: priorAuthentication, userId: priorId});
  }

  handleUserSessionUpdate(username, isAuthenticated, userId) {
    UserSession.setUsername(username);
    UserSession.setAuthenticated(isAuthenticated);
    UserSession.setId(userId);

    this.setState({username: username, isAuthenticated: isAuthenticated, userId: userId});
  }

  updateTracking() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log("This is what I am currently passing in as pageview: " + window.location.pathname + window.location.search);
  }

  render() {

    const {
      LAUNCH,
      LOGIN,
      LINKS,
      LINKPROFILE,
      USERPROFILE,
      MESSAGES,
      ONBOARDING_A,
      ONBOARDING_B,
      CHAT
    } = navConsts;

    return (
    <div className="main">
      <div className="mainViewContainer">
      <Switch >

        <Route
          exact path="/"
          render={() => (
            <LoginRedirect 
              isAuthenticated={this.state.isAuthenticated}
              handleTracking={this.updateTracking}
            />
          )}
        />
        
        {this.state.isAuthenticated ? (
          <Route
            exact path={"/" + LAUNCH}
            render={() => (
              <LoginRedirect 
                isAuthenticated={this.state.isAuthenticated}
                handleTracking={this.updateTracking}
              />
            )}
          />
          ) : (
          <Route
            exact path={"/" + LAUNCH}
            render={() => (
              <LaunchView 
                onBackClick={this.handleBackToLaunch}
                handleTracking={this.updateTracking}
              />
            )}
          />
        )}

        {this.state.isAuthenticated ? (
          <Route
            exact path={"/" + LOGIN}
            render={() => (
              <LoginRedirect 
                isAuthenticated={this.state.isAuthenticated}
                handleTracking={this.updateTracking}
              />
            )}
          />
          ) : (
          <Route
            exact path={"/" + LOGIN}
            render={() => (
              <LoginView 
                onUserSessionUpdate={this.handleUserSessionUpdate}
                handleTracking={this.updateTracking}
              />
            )}
          />
        )}
        
        <Route
          exact path={"/" + LINKS}
          render={() => (
            <LinksView 
              userId={this.state.userId}
              handleTracking={this.updateTracking}
            />
          )}
        />
        <Route
          exact path={"/" + LINKPROFILE + "/:id"}
          render={(props) => (
            <LinkProfileView
              {...props}
              handleTracking={this.updateTracking}
            />
          )}
          // component={LinkProfileView}
        />
        <Route
          exact path={"/" + USERPROFILE}
          render={() => (
            <UserProfileView
              handleTracking={this.updateTracking}
              onUserSessionUpdate={this.handleUserSessionUpdate}
            />
          )}
          // component={UserProfileView}
        />
        <Route
          exact path={"/" + MESSAGES}
          render={() => (
            <MessagesView
              handleTracking={this.updateTracking}
            />
          )}
          // component={MessagesView}
        />

        <Route
          exact path={"/" + ONBOARDING_A}
          render={() => (
            <OnboardingView 
              onUserSessionUpdate={this.handleUserSessionUpdate}
              handleTracking={this.updateTracking}
            />
          )}
        />
        <Route
          exact path={"/" + ONBOARDING_B}
          render={() => (
            <OnboardingViewV2 
              onUserSessionUpdate={this.handleUserSessionUpdate}
              handleTracking={this.updateTracking}
            />
          )}
        />
        <Route
          exact path={"/" + CHAT + "/:id"}
          render={(props) => (
            <ChatView
              {...props}
              handleTracking={this.updateTracking}
            />
          )}
          // component={ChatView}
        />

      </Switch>
      </div>
      <div className="navBarContainer">
      {this.state.isAuthenticated && (
        <NavBar userId={this.state.userId}/>
      )}
      </div>
    </div>
    );
  }
}