import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { navConsts } from '../../constants';

export default class SkillsForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {LINKS} = navConsts;
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
          <h1> Add some photos of yourself! </h1>
        </Row>
        <Row>
          <Button
            variant="primary" type="submit"
            onClick={() => {
              this.props.onPrevClick();
            }}
          >
            +
          </Button>
          <Button
            variant="primary" type="submit"
            onClick={() => {
              this.props.onPrevClick();
            }}
          >
            +
          </Button>
          <Button
            variant="primary" type="submit"
            onClick={() => {
              this.props.onPrevClick();
            }}
          >
            +
          </Button>
        </Row>
        <Row>
          <h2> 3 required </h2>
          {/* <h2> Drag to reorder </h2> */}
        </Row>
        <Row>
          <h1> What are you looking for? </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control type="bio" />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Link to={"/"}>
          <Button
            variant="primary" type="submit" onClick={this.props.onSignUp}
          >
            Finish
          </Button>
          </Link>
        </Row>
      </Container>
    )
  }

}