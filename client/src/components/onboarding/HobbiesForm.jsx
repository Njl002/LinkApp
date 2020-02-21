import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

export default class HobbiesForm extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Button variant="primary" type="submit" onClick={this.props.onPrevClick}>
            Back
          </Button>
        </Row>
        <Row>
          <h1> What are some of your hobbies and interests? </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control type="text" name="hobbiesForm" placeholder="Hobbies & Interests"
                onChange={e => this.props.onHobbiesChange(e.target.value)} />
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