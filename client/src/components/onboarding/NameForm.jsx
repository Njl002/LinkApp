import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

export default class NameForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Button
            variant="primary" type="submit"
            onClick={() => {
              this.props.onPrevClick();
            }}
            >
            Back
          </Button>
        </Row>
        <Row>
          <h1> My name is </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group controlID="formFirstName">
              <Form.Control type="firstName" placeholder="First Name" />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group controlID="formLastName">
              <Form.Control type="lastName" placeholder="Last Name" />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Button
            variant="primary" type="submit"
            onClick={() => {
              this.props.onNextClick();
            }}
            >
            >
          </Button>
        </Row>
      </Container>
    );
  }
}