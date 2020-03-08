import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import './css/HometownForm.css';

export default class HometownForm extends Component {
  render() {
    return (
      <Container className="hometown-view">
        <Row className="back-row">
          <Button variant="primary" type="submit" bsPrefix="hometown-back-button" onClick={this.props.onPrevClick}>
            <FiChevronLeft />
          </Button>
        </Row>
        <Row>
          <h1> Where is your hometown? </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control type="text" name="hometownForm" bsPrefix="hometown-form" placeholder="Add city" 
                onChange={e => this.props.onHometownChange(e.target.value)} />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Button variant="primary" type="submit" bsPrefix="hometown-next-button" onClick={this.props.onNextClick}>
            <FiChevronRight />
          </Button>
        </Row>
      </Container>
    );
  }
}