import React, { Component } from 'react';
import { Container, Col, Button} from 'react-bootstrap';

import LoginForm from './LoginForm';


export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  // TODO give login check functionality
  handleLogin(email, password) {
    // give actually user/pass checking functionality later
    this.props.onUserSessionUpdate(email, true, "13");
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