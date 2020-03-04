import React, { Component } from 'react';
import { Container, Col, Button} from 'react-bootstrap';

import LoginForm from './LoginForm';


export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    this.props.handleTracking();
  }

  // TODO give login check functionality
  handleLogin(email, password) {
    // give actually user/pass checking functionality later

    // default log in as id = "13"
    if (email === "") {
      this.props.onUserSessionUpdate(email, true, "13");
    }
    // to allow for user to log in as any id value
    else {
      this.props.onUserSessionUpdate(email, true, email);
    }
  }


  render() {
    return (
      <Container>
        <Col>
          <LoginForm 
            onLogin={this.handleLogin} 
          />
        </Col>
      </Container>
    );
  }
}