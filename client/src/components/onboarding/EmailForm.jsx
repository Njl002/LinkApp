import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

export default class EmailForm extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
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
            <h1> My school email is </h1>
          </Row>
          <Row>
            <Form>
              <Form.Group>
                <Form.Control type="schoolEmail" placeholder="School email" />
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