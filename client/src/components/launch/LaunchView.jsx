import React, { Component } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navConsts } from '../../constants';


import default_profile_img from '../../resources/blank-profile-picture.png';

export default class LaunchView extends Component {

  render() {
    const { LOGIN, ONBOARDING } = navConsts;
    return (
      <Container fluid>
        <Row>
          <Col xs={6} md={4}>
            <Image src={default_profile_img} rounded/>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Link to={"/" + ONBOARDING}>
              <Button> Get Started </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Link to={"/" + LOGIN}>
              <Button> Login </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}