import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

import '../onboarding/css/HometownForm.css';


export default class HometownFormV2 extends Component {
  render() {
    return (
      <Container>
        <Row>
          <h1> Where is your hometown? </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control type="text" name="hometownForm" bsPrefix="hometown-back-button" placeholder="Add city" 
                onChange={e => this.props.onHometownChange(e.target.value)} />
            </Form.Group>
          </Form>
        </Row>
      </Container>
    );
  }
}