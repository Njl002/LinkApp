import React, { Component } from 'react';
import { Button, Container, Row, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export default class RoleChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sLookingForMentee: false,
      sLookingForMentor: false
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
          <h1> I am looking for a </h1>
        </Row>
        <Row>
          <ButtonToolbar>
            <ToggleButtonGroup
              type="checkbox" 
              name="lookingForMentor"
              onChange={e =>
                this.setState({
                  sLookingForMentor: !this.state.sLookingForMentor
                }, () => {
                  console.log("Looking for mentor? : ", this.state.sLookingForMentor); 
                })
              }
            >
              <ToggleButton>Mentor</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Row>
        <Row>
          <ButtonToolbar>
            <ToggleButtonGroup
              type="checkbox" 
              name="lookingForMentee"
              onChange={e =>
                this.setState({
                  sLookingForMentee: !this.state.sLookingForMentee
                }, () => {
                  console.log("Looking for mentee? : ", this.state.sLookingForMentee); 
                })
              }
            >
              <ToggleButton>Mentee</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
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