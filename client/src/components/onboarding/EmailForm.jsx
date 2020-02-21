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