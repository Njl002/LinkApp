import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Typeahead, Highlighter } from "react-bootstrap-typeahead";
import options from './data/us_cities';
import './css/HometownForm.css';

export default class HometownForm extends Component {
  handleHometownChange = options => {
    console.log(options);
    if(options.length > 0) {
      console.log(options[0].city);
      console.log(options[0].state);
      console.log(options[0].city + ', ' + options[0].state);
      this.props.onHometownChange(options[0].city + ', ' + options[0].state);
    }
  }

  renderMenuItemChildren(option, props, index) {
    return (
      [
        <Highlighter key="city" search={props.text}>
          {option.city}
        </Highlighter>,
        <div key="state">
          <small>
            State: {option.state.toLocaleString()}
          </small>
      </div >
      ]
    );
  }

  render() {
    return (
      <Container className="hometown-view">
        <Row className="back-row">
          <Button variant="primary" type="submit" bsPrefix="hometown-back-button" onClick={this.props.onPrevClick}>
            <FiChevronLeft />
          </Button>
        </Row>
        <Row>
          <h1> Where is your hometown? </h1>
        </Row>
        <Row>
          <Typeahead
            className="hometown-typeahead"
            id="hometown-typeahead"
            labelKey="city"
            onChange={this.handleHometownChange}
            options={options}
            placeholder="Add city"
            renderMenuItemChildren={this.renderMenuItemChildren}
            selectHintOnEnter={false}
          />
        </Row>
        <Row>
          <Button variant="primary" type="submit" bsPrefix="hometown-next-button" onClick={this.props.onNextClick}>
            <FiChevronRight />
          </Button>
        </Row>
      </Container>
    );
  }
}