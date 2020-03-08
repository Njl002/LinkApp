import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import './css/EmailForm.css';

export default class EmailForm extends Component {

  render() {
    return (
      <Container className="school-email-view">
        <Row>
          <Button variant="primary" type="submit" bsPrefix="email-back-button" onClick={this.props.onPrevClick}>
            <FiChevronLeft />
          </Button>
        </Row>
        <Row>
          <h1> My school email is </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control type="text" name="emailForm" bsPrefix="email-form" placeholder="School email"
                onChange={e => this.props.onEmailChange(e.target.value)} />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                bsPrefix="email-form"
                onChange={e => this.props.onPasswordChange(e.target.value)} />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form.Label className="email-label"> Password (Note: don't put any sensitive passwords here as nothing is protected) </Form.Label>
        </Row>
        <Row>
          <Button variant="primary" type="submit" bsPrefix="email-next-button" onClick={this.props.onNextClick}>
            <FiChevronRight />
          </Button>
        </Row>
      </Container>
    )
  }

}