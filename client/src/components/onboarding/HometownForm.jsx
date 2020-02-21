import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

export default class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sHometown: ""
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
          <h1> Where is your hometown? </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control 
                type="text"
                name="hometownForm"
                placeholder="Add city" 
                onChange={e =>
                  this.setState({
                    sHometown: e.target.value
                  }, () => {
                    console.log("New hometown:", this.state.sHometown); 
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
    );
  }
}