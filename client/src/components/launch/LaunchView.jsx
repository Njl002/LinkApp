import React, { Component } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navConsts } from '../../constants';

import './css/LaunchView.css';

import logo from '../../resources/link-image.png';

export default class LaunchView extends Component {

  render() {
    const { LOGIN, ONBOARDING_A, ONBOARDING_B } = navConsts;
    return (
      <Container className="launchView">
        <Row float="center">
          <Col xs={12} md={12}>
            <Image src={logo}/>
            <h3 className="logo"> Link</h3>
          </Col>
        </Row>
        <Row float="center">
          <Col xs={12} md={12}>
            <Link to={"/" + ONBOARDING_A}>
              <Button className="button"> Get Started </Button>
            </Link>
            <Link to={"/" + ONBOARDING_B}>
              <Button className="button"> Get Started V2 (for A/B testing)</Button>
            </Link>
          </Col>
        </Row>
        <Row float="center">
          <Col xs={12} md={12} >
            <Link to={"/" + LOGIN}>
              <Button className="button"> Login </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}