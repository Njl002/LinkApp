import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import './css/HobbiesForm.css';

export default class HobbiesForm extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Button variant="primary" type="submit" bsPrefix="hobbies-back-button" onClick={this.props.onPrevClick}>
            <FiChevronLeft />
          </Button>
        </Row>
        <Row>
          <h1> What are some of your hobbies and interests? </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control type="text" name="hobbiesForm" bsPrefix="hobbies-form" placeholder="Hobbies & Interests"
                onChange={e => this.props.onHobbiesChange(e.target.value)} />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Button
            variant="primary" type="submit"
            bsPrefix="hobbies-next-button"
            onClick={() => {
              this.props.onNextClick();
            }}
          >
            <FiChevronRight />
          </Button>
        </Row>
      </Container>
    )
  }

}