import React, { Component } from 'react';
import { Container, Col, Button} from 'react-bootstrap';

import LoginForm from './LoginForm';


export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  // TODO give login check functionality and add signup functionality
  handleLogin(email, password) {
    
    this.props.onUserSessionUpdate(email, true, "7");
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