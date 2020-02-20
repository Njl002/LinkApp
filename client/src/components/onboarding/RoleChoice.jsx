import React, { Component } from 'react';
import { Button, Container, Row, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export default class RoleChoice extends Component {
  constructor(props) {
    super(props);
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
            <ToggleButtonGroup type="checkbox" name="lookingForMentor">
              <ToggleButton value={1}>Mentor</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Row>
        <Row>
          <ButtonToolbar>
            <ToggleButtonGroup type="checkbox" name="lookingForMentee">
              <ToggleButton value={1}>Mentee</ToggleButton>
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