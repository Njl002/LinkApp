import React, { Component } from 'react';
import { Button, Container, Row, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export default class BasicInfoStart extends Component {

  render() {
    return (
      <Container>
        <Button variant="primary" type="submit" onClick={this.props.onPrevClick}>
            Back
        </Button>
        <Row>
          <h1> Adding basic info links you to better connections. </h1>
        </Row>
        <Row>
          <Button
            variant="primary" type="submit"
            onClick={() => {
              this.props.onNextClick();
            }}
          >
            Add basic info
          </Button>
        </Row>
      </Container>
    )
  }

}