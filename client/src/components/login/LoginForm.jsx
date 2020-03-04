import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import './css/LoginForm.css';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
  }

  render() {
    return (
      <Form className="loginForm">
        <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control 
          placeholder="Enter username"
          onChange={e => this.setState({username: e.target.value})}
        />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password"
            onChange={e => this.setState({password: e.target.value})}
          />
        </Form.Group>
        <Button 
          className="loginFormSubmitBtn"
          variant="primary" type="submit" 
          onClick={() => {
            this.props.onLogin(this.state.username, this.state.password);
          }}
        >
          Submit
        </Button>
        
      </Form>
    );
  }
}