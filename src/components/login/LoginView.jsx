import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navConsts } from '../../constants';

import LoginForm from './LoginForm';


export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(email, password) {
    this.props.onUserSessionUpdate(email, true)
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