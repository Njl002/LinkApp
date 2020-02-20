import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navConsts } from '../../constants';

export default class NameForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { LAUNCH } = navConsts;
    return (
      <Container>
        <Row>
          <Link to={"/" + LAUNCH}>
            <Button variant="primary" type="submit">
              Back
            </Button>
          </Link>
        </Row>
        <Row>
          <h1> My name is </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control type="firstName" placeholder="First Name" />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control type="lastName" placeholder="Last Name" />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Button variant="primary" type="submit"
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