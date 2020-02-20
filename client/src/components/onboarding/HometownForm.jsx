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
          <h1> Where is your hometown? </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group controlID="hometownForm">
              <Form.Control type="hometown" placeholder="Add city" />
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