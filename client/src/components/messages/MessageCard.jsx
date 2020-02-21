import React, { Component } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';

export default class MessageCard extends Component {
  render() {
    return (
      <Card style={{ width: '100%' }}>
        <Container>
          <Row>
            <Col>
              <Image src={this.props.partnerImageURL} roundedCircle style={{ width: '5rem', height: '6rem', float: 'left' }}/> 
            </Col> 
            <Col>
              <Card.Title> {this.props.partnerName} </Card.Title>
              <Card.Body>
                <Card.Text> {this.props.lastMessage} </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    );
  }
}