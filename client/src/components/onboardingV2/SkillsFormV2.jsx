import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

import '../onboarding/css/SkillsForm.css';


export default class SkillsFormV2 extends Component {

  render() {
    return (
      <Container>
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
      </Container>
    )
  }

}