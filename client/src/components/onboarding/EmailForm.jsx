import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

export default class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sEmail: ""
    };
  }

  render() {
    return (
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
              <Form.Control 
                type="text"
                name="emailForm"
                placeholder="School email" 
                onChange={e =>
                  this.setState({
                    sEmail: e.target.value
                  }, () => {
                    console.log("New email:", this.state.sEmail); 
                  })
                }
              />
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