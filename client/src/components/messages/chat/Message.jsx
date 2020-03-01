import React, { Component } from 'react';
import { Card, Image, Row, Col } from 'react-bootstrap';

import UserSession from '../../../storage/UserSession';

import './css/Message.css';

export default class Message extends Component {
 
  render() {
    let message = 0;
    if (this.props.from === UserSession.getId()) {
      message = (
        <Row className="messageLine">
          <Col xs={12} md={12}>
            <Card body className="sentMessage">
              <Card.Text className="sentMessageText">
                {this.props.body}
              </Card.Text>
            </Card>
          </Col>
        </Row>
      );
    }
    // received message
    else {
      // decide whether to show image or not (show on last message received)
      if (this.props.displayImage) {
        message = (
          <Row className="messageLine">
            <Col xs={2} md={1} className="image"> 
              <Image src={this.props.imageURL} roundedCircle/>
            </Col>
            <Col xs={10} md={11} className="message">
              <Card body className="receivedMessage">
                <Card.Text className="receivedMessageText">
                  {this.props.body}
                </Card.Text>
              </Card>
            </Col>
          </Row>
        );
      }
      else {
        message = (
          <Row className="messageLine">
            <Col xs={{ span: 10, offset: 2 }} md={{ span: 11, offset: 1 }} className="message">
              <Card body className="receivedMessage">
                <Card.Text className="receivedMessageText">
                  {this.props.body}
                </Card.Text>
              </Card>
            </Col>
          </Row>
        );
      }
      
    }
    return (
        message
    );
  }
}