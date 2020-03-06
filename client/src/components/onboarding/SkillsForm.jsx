import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import './css/SkillsForm.css';

export default class SkillsForm extends Component {

  render() {
    return (
      <Container className="skills-view">
        <Row>
          <Button variant="primary" type="submit" bsPrefix="skills-back-button" onClick={this.props.onPrevClick}>
            <FiChevronLeft />
          </Button>
        </Row>
        <Row>
          <h1> What are some of your skills? </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control type="text" name="skillsForm" bsPrefix="skills-form" placeholder="Skills" 
                onChange={e => this.props.onSkillsChange(e.target.value)} />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Button variant="primary" type="submit" bsPrefix="skills-next-button" onClick={this.props.onNextClick}>
            <FiChevronRight />
          </Button>
        </Row>
      </Container>
    )
  }

}