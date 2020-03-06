import React, { Component } from 'react';
import { Button, Container, Row, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import '../onboarding/css/MajorChoice.css';

export default class MajorChoiceV2 extends Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(vals) {
    this.props.onMajorChange(vals);
    this.setState({ sMajor: vals }, () => { console.log("New major:", this.state.sMajor)});
  }

  render() {
    return (
      <Container>
        <Row>
          <h1> Hi Bianca, </h1>
        </Row>
        <Row>
          <h2> Pick a major. </h2>
        </Row>
        <Row>
          <ButtonToolbar>
            <ToggleButtonGroup 
              vertical 
              type="radio" 
              name="majorToggle" 
              defaultValue={"Aerospace Engineering"}
              onChange={this.handleToggle}
            >
              <ToggleButton value={"Aerospace Engineering"} bsPrefix="major-toggle">Aerospace Engineering</ToggleButton>
              <ToggleButton value={"BioInformatics"} bsPrefix="major-toggle">BioInformatics</ToggleButton>
              <ToggleButton value={"Biomedical Engineering"} bsPrefix="major-toggle">Biomedical Engineering</ToggleButton>
              <ToggleButton value={"Chemical Engineering"} bsPrefix="major-toggle">Chemical Engineering</ToggleButton>
              <ToggleButton value={"Civil Engineering"} bsPrefix="major-toggle">Civil Engineering</ToggleButton>
              <ToggleButton value={"Cognitive Science"} bsPrefix="major-toggle">Cognitive Science</ToggleButton>
              <ToggleButton value={"Computer Science"} bsPrefix="major-toggle">Computer Science</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Row>
      </Container>
    )
  }

}