import React, { Component } from 'react';
import { Button, Container, Row, Form } from 'react-bootstrap';

export default class SchoolForm extends Component {
    constructor(props) {
      super(props);
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
              <Form.Group controlID="formSchoolName">
                <Form.Control type="schoolName" placeholder="Your school name" />
              </Form.Group>
            </Form>
          </Row>
          <Row>
            <h2> From </h2>
          </Row>
          <Row>
            <Form>
              <Form.Group controlID="formFromSchoolMonth1">
                <Form.Control type="fromSchoolMonth1" placeholder="M" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlID="formFromSchoolMonth2">
                <Form.Control type="fromSchoolMonth2" placeholder="M" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlID="formFromSchoolYear1">
                <Form.Control type="fromSchoolYear1" placeholder="Y" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlID="formFromSchoolYear2">
                <Form.Control type="fromSchoolYear2" placeholder="Y" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlID="formFromSchoolYear3">
                <Form.Control type="fromSchoolYear3" placeholder="Y" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlID="formFromSchoolYear4">
                <Form.Control type="fromSchoolYear4" placeholder="Y" />
              </Form.Group>
            </Form>
          </Row>
          <Row>
            <h2> To </h2>
          </Row>
          <Row>
            <Form>
              <Form.Group controlID="formToSchoolMonth1">
                <Form.Control type="toSchoolMonth1" placeholder="M" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlID="formToSchoolMonth2">
                <Form.Control type="toSchoolMonth2" placeholder="M" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlID="formToSchoolYear1">
                <Form.Control type="toSchoolYear1" placeholder="Y" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlID="formToSchoolYear2">
                <Form.Control type="toSchoolYear2" placeholder="Y" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlID="formToSchoolYear3">
                <Form.Control type="toSchoolYear3" placeholder="Y" />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlID="formToSchoolYear4">
                <Form.Control type="toSchoolYear4" placeholder="Y" />
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