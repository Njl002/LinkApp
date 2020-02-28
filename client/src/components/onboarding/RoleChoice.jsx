import React, { Component } from 'react';
import { Button, Container, Row, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export default class RoleChoice extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(vals) {
    this.props.onRoleChange(vals);
    this.setState({ sRole: vals }, () => { console.log("New role:", this.state.sRole)});
  }

  render() {
    return (
      <Container>
        <Row>
          <Button variant="primary" type="submit" onClick={this.props.onPrevClick}>
            Back
          </Button>
        </Row>
        <Row>
          <h1> I am looking for a </h1>
        </Row>
        <Row>
          <ButtonToolbar>
            <ToggleButtonGroup 
              vertical 
              type="radio" 
              name="roleToggle" 
              defaultValue={"Mentor"}
              onChange={this.handleToggle}
            >
              <ToggleButton value={"Mentee"}>Mentor</ToggleButton>
              <ToggleButton value={"Mentor"}>Mentee</ToggleButton>
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