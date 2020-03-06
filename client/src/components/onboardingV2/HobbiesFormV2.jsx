import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

import '../onboarding/css/HobbiesForm.css';


export default class HobbiesFormV2 extends Component {

  render() {
    return (
      <Container>
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
      </Container>
    )
  }

}