import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

export default class HobbiesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sHobbies: ""
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
          <h1> What are some of your hobbies and interests? </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control 
                type="text"
                name="hobbiesForm"
                placeholder="Hobbies & Interests"
                onChange={e =>
                  this.setState({
                    sHobbies: e.target.value
                  }, () => {
                    console.log("New hobbies:", this.state.sHobbies); 
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