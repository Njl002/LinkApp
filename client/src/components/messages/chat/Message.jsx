import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import UserSession from '../../../storage/UserSession';

import './css/Message.css';

export default class Message extends Component {
 
  render() {
    // should be on the right side
    let message = 0;
    let offset = 0;
    if (this.props.from === UserSession.getId()) {
      message = (
        
        <Card body className="sentMessage">
          {this.props.body}
        </Card>
      );
    }
    else {
      message = (
        <Card body className="receivedMessage">
          {this.props.body}
        </Card>
      );
    }
    return (
      <div className="messageBubble">
        {message}
      </div>
    );
  }
}