import React, { Component } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navConsts } from '../../constants';

import './css/LaunchView.css';

import logo from '../../resources/images/link-image.png';

export default class LaunchView extends Component {

  componentDidMount() {
    this.props.handleTracking();
  }

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
              <Button className="signupBtn"> Get Started</Button>
            </Link>
            {/* <Link to={"/" + ONBOARDING_B}>
              <Button className="signupBtn"> Get Started B</Button>
            </Link> */}
          </Col>
        </Row>
        <Row float="center">
          <Col xs={12} md={12} >
            <Link to={"/" + LOGIN}>
              <Button className="loginBtn"> Log In </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}