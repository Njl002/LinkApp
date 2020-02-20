import React, { Component } from 'react';
import { Button, Container, Row, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export default class MajorChoice extends Component {
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
          <h1> Hi Bianca, </h1>
        </Row>
        <Row>
          <h2> Pick up to two majors. </h2>
        </Row>
        <Row>
          <ButtonToolbar>
            <ToggleButtonGroup vertical type="radio" name="majorToggle" defaultValue={1}>
              <ToggleButton value={1}>Aerospace Engineering </ToggleButton>
              <ToggleButton value={2}>BioInformatics </ToggleButton>
              <ToggleButton value={3}>Biomedical Engineering</ToggleButton>
              <ToggleButton value={4}>Chemical Engineering</ToggleButton>
              <ToggleButton value={5}>Civil Engineering</ToggleButton>
              <ToggleButton value={6}>Cognitive Science </ToggleButton>
              <ToggleButton value={7}>Computer Science</ToggleButton>
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