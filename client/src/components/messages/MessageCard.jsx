import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class MessageCard extends Component {
  render() {
    return (
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title> Name </Card.Title>
          <Card.Text> {this.props.lastMessage} </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}