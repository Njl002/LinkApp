import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

import UserSession from '../../../storage/UserSession';


export default class Message extends Component {
 
  render() {
    // should be on the right side
    let message = 0;
    let offset = 0;
    if (this.props.from === UserSession.getId()) {
      message = (
        <Row>
        <Col md={{ span: 6, offset: {offset} }} xs={{ span: 6, offset: {offset} }}>
            
        </Col>
        <Col md={{ span: 6, offset: {offset} }} xs={{ span: 6, offset: {offset} }}>
            {this.props.body}
        </Col>
        </Row>
      );
    }
    else {
      message = (
        <Row>
        <Col md={{ span: 6, offset: {offset} }} xs={{ span: 6, offset: {offset} }}>
          {this.props.body}
        </Col>
        <Col md={{ span: 6, offset: {offset} }} xs={{ span: 6, offset: {offset} }}>
        </Col>
        </Row>
      );
    }
    return (
      <Card body>
        <Container fluid>
          <Row> 
            {message}
          </Row>
        </Container>
      </Card>
    );
  }
}