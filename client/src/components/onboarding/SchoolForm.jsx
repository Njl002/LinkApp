import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./css/SchoolForm.css";

export default class SchoolForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date("2009/01/01"),
      endDate: new Date("2009/01/01")
    };
  }

  onDateStartChange = date => {
    var tempMonth = date.getMonth() + 1;
    var monthString = "";
    if (tempMonth < 10) {
      monthString = '0' + tempMonth.toString();
    } else {
      monthString = tempMonth.toString();
    }
    this.props.onMonthStartChange(monthString);
    this.props.onYearStartChange(date.getFullYear().toString());
    this.setState({
      startDate: date
    });
  };

  onDateEndChange = date => {
    var tempMonth = date.getMonth() + 1;
    var monthString = "";
    if (tempMonth < 10) {
      monthString = '0' + tempMonth.toString();
    } else {
      monthString = tempMonth.toString();
    }
    this.props.onMonthEndChange(monthString);
    this.props.onYearEndChange(date.getFullYear().toString());
    this.setState({
      endDate: date
    });
  };

  render() {
    return (
      <Container className="school-view">
        <Row className="back-row">
          <Button variant="primary" type="submit" bsPrefix="school-back-button" onClick={this.props.onPrevClick}>
            <FiChevronLeft />
          </Button>
        </Row>
        <Row>
          <h1> I attend </h1>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Control type="text" name="schoolNameForm" placeholder="Your School Name" bsPrefix="school-form"
                onChange={e => this.props.onSchoolNameChange(e.target.value)} />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <h2> From </h2>
        </Row>
        <Row>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.onDateStartChange}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
        </Row>
        <Row>
          <h2> To </h2>
        </Row>
        <Row>
          <DatePicker
            selected={this.state.endDate}
            onChange={this.onDateEndChange}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
        </Row>
        <Row>
          <Button variant="primary" type="submit" bsPrefix="school-next-button" onClick={this.props.onNextClick}>
            <FiChevronRight />
          </Button>
        </Row>
      </Container>
    )
  }

}