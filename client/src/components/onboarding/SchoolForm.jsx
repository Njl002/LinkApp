import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

export default class SchoolForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        sSchoolName: "",
        sMonthStart: "",
        sYearStart: "",
        sMonthEnd: "",
        sYearEnd: ""
      };
    }
  
    render() {
      return(
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
            <h1> I attend </h1>
          </Row>
          <Row>
            <Form>
              <Form.Group>
                <Form.Control 
                  type="text"
                  name="schoolNameForm"
                  placeholder="Your school name" 
                    onChange={e =>
                      this.setState({
                        sSchoolName: e.target.value
                      }, () => {
                        console.log("New School Name:", this.state.sSchoolName); 
                      })
                    }
                />
              </Form.Group>
            </Form>
          </Row>
          <Row>
            <h2> From </h2>
          </Row>
          <Row>
            <Form>
              <Form.Group>
                <Form.Control 
                  name="startMonthForm" 
                  as="select" 
                  onChange={e =>
                    this.setState({
                      sMonthStart: e.target.value
                    }, () => {
                      console.log("New starting month:", this.state.sMonthStart); 
                    })
                  }
                >
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Form.Control>
                <Form.Label>Month</Form.Label>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Control 
                  name="startYearForm" 
                  as="select" 
                  onChange={e =>
                    this.setState({
                      sYearStart: e.target.value
                    }, () => {
                      console.log("New starting year:", this.state.sYearStart); 
                    })
                  }
                >
                  <option>2009</option>
                  <option>2010</option>
                  <option>2011</option>
                  <option>2012</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                </Form.Control>
                <Form.Label>Year</Form.Label>
              </Form.Group>
            </Form>
          </Row>
          <Row>
            <h2> To </h2>
          </Row>
          <Row>
            <Form>
              <Form.Group>
                <Form.Control 
                  name="endMonthForm" 
                  as="select" 
                  onChange={e =>
                    this.setState({
                      sMonthEnd: e.target.value
                    }, () => {
                      console.log("New ending month:", this.state.sMonthEnd); 
                    })
                  }
                >
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Form.Control>
                <Form.Label>Month</Form.Label>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Control 
                  name="endYearForm" 
                  as="select" 
                  onChange={e =>
                    this.setState({
                      sYearEnd: e.target.value
                    }, () => {
                      console.log("New ending year:", this.state.sYearEnd); 
                    })
                  }
                >
                  <option>2009</option>
                  <option>2010</option>
                  <option>2011</option>
                  <option>2012</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                </Form.Control>
                <Form.Label>Year</Form.Label>
              </Form.Group>
            </Form>
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