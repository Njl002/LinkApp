import React, { Component } from 'react';
import { Button, Container, Row, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import './css/BasicInfoStart.css'

export default class BasicInfoStart extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Button variant="primary" type="submit" bsPrefix="basic-info-back-button" onClick={this.props.onPrevClick}>
            <FiChevronLeft />
          </Button>
        </Row>
        <Row>
          <h1> Adding basic info links you to better connections. </h1>
        </Row>
        <Row>
          <Button
            variant="primary" type="submit"
            bsPrefix="basic-info-next-button"
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