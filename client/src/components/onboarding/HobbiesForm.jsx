import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

export default class HobbiesForm extends Component {
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
          <h1> What are some of your hobbies and interests? </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control type="hobbies" placeholder="Hobbies & Interests" />
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
    )
  }

}