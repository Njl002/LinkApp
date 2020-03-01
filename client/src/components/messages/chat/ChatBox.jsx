import React, { Component } from 'react';
import { Container, Col, Row, Form, Button} from 'react-bootstrap';
import MessageList from './MessageList';

import './css/ChatBox.css';

export default class ChatBox extends Component {

  render() {
    return (
      <Container className="chatBoxContainer">

        <MessageList messages={this.props.messages} userId={this.props.userId} imageURL={this.props.imageURL}/>

      </Container>
    );
  }
}