import React, { Component } from 'react';
import { Button, Container, Row, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

import '../onboarding/css/RoleChoice.css';


export default class RoleChoiceV2 extends Component {
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
          <h1> I am looking to be a </h1>
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
              <ToggleButton value={"Mentor"} bsPrefix="role-toggle">Mentor</ToggleButton>
              <ToggleButton value={"Mentee"} bsPrefix="role-toggle">Mentee</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Row>
      </Container>
    )
  }

}