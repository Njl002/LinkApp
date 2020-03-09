import React, { Component } from 'react';
import { Button, Container, Row, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Typeahead } from "react-bootstrap-typeahead";
import options from './data/college_majors';
import './css/MajorChoice.css';

export default class MajorChoice extends Component {
  constructor(props) {
    super(props);
  }

  handleMajorChange = options => {
    console.log(options);
    if(options.length > 0) {
      console.log(options[0].Major);
      this.props.onMajorChange(options[0].Major);
    }
  }

  render() {
    return (
      <Container className="major-view">
        <Row className="back-row">
          <Button variant="primary" type="submit" bsPrefix="major-back-button" onClick={this.props.onPrevClick}>
            <FiChevronLeft />
          </Button>
        </Row>
        <Row>
          <h1> Hi {this.props.firstName}, </h1>
        </Row>
        <Row>
          <h2> Pick a major. </h2>
        </Row>
        <Row>
          <Typeahead
            className="major-typeahead"
            id="major-typeahead"
            labelKey="Major"
            onChange={this.handleMajorChange}
            options={options}
            placeholder="Add Major"
            selectHintOnEnter={false}
          />
        </Row>
        <Row>
          <Button variant="primary" type="submit" bsPrefix="major-next-button" onClick={this.props.onNextClick}>
            <FiChevronRight />
          </Button>
        </Row>
      </Container>
    )
  }

}