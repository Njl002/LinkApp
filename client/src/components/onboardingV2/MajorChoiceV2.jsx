import React, { Component } from 'react';
import { Button, Container, Row, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

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
              <ToggleButton value={"Aerospace Engineering"}>Aerospace Engineering</ToggleButton>
              <ToggleButton value={"BioInformatics"}>BioInformatics</ToggleButton>
              <ToggleButton value={"Biomedical Engineering"}>Biomedical Engineering</ToggleButton>
              <ToggleButton value={"Chemical Engineering"}>Chemical Engineering</ToggleButton>
              <ToggleButton value={"Civil Engineering"}>Civil Engineering</ToggleButton>
              <ToggleButton value={"Cognitive Science"}>Cognitive Science</ToggleButton>
              <ToggleButton value={"Computer Science"}>Computer Science</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Row>
      </Container>
    )
  }

}