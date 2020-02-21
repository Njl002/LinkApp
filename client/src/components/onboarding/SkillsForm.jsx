import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

export default class SkillsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sSkills: ""
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
          <h1> What are some of your skills? </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control 
                type="text"
                name="skillsForm"
                placeholder="Skills" 
                onChange={e =>
                  this.setState({
                    sSkills: e.target.value
                  }, () => {
                    console.log("New skills:", this.state.sSkills); 
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