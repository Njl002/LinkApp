import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

import './css/EmailFormV2.css';


export default class EmailFormV2 extends Component {

  render() {
    return (
      <Container className="email-view">
        <Row>
          <h1> My school email is </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control type="text" name="emailForm" bsPrefix="email-form" placeholder="School email" 
                onChange={e => this.props.onEmailChange(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password (Note: don't put any sensitive passwords here as nothing is protected)</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password"
                bsPrefix="email-form"
                onChange={e => this.props.onPasswordChange(e.target.value)} />
        </Form.Group>
          </Form>
        </Row>
      </Container>
    )
  }

}