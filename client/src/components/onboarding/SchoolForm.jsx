import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

export default class SchoolForm extends Component {
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
            <h1> I attend </h1>
          </Row>
          <Row>
            <Form>
              <Form.Group>
                <Form.Control placeholder="Your school name" />
              </Form.Group>
            </Form>
          </Row>
          <Row>
            <h2> From </h2>
          </Row>
          <Row>
            <Form>
              <Form.Group>
                <Form.Control placeholder="M" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Control placeholder="M" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Control placeholder="Y" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Control placeholder="Y" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Control placeholder="Y" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Control placeholder="Y" />
              </Form.Group>
            </Form>
          </Row>
          <Row>
            <h2> To </h2>
          </Row>
          <Row>
            <Form>
              <Form.Group>
                <Form.Control placeholder="M" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Control placeholder="M" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Control placeholder="Y" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Control placeholder="Y" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Control placeholder="Y" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Control placeholder="Y" />
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