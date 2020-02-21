import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navConsts } from '../../constants';

export default class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sFirstName: "",
      sLastName: ""
    };
  }

  render() {
    const { LAUNCH } = navConsts;
    return (
      <Container>
        <Row>
          <Link to={"/" + LAUNCH}>
            <Button variant="primary" type="submit">
              Back
            </Button>
          </Link>
        </Row>
        <Row>
          <h1> My name is </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control 
                type="text" 
                name="firstNameForm" 
                placeholder="First Name" 
                onChange={e =>
                  this.setState({
                    sFirstName: e.target.value
                  }, () => {
                    console.log("New First Name:", this.state.sFirstName); 
                  })
                }
              />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control 
                type="text" 
                name="lastNameForm" 
                placeholder="Last Name"
                onChange={e =>
                  this.setState({
                    sLastName: e.target.value
                  }, () => {
                    console.log("New Last Name:", this.state.sLastName); 
                  })
                }
              />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Button variant="primary" type="submit"
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