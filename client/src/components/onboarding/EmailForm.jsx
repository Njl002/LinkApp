import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

export default class EmailForm extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Button variant="primary" type="submit" onClick={this.props.onPrevClick}>
            Back
          </Button>
        </Row>
        <Row>
          <h1> My school email is </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control type="text" name="emailForm" placeholder="School email" 
                onChange={e => this.props.onEmailChange(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password (Note: don't put any sensitive passwords here as nothing is protected)</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password"
                onChange={e => this.props.onPasswordChange(e.target.value)} />
        </Form.Group>
          </Form>
        </Row>
        <Row>
          <Button variant="primary" type="submit" onClick={this.props.onNextClick}>
            >
          </Button>
        </Row>
      </Container>
    )
  }

}