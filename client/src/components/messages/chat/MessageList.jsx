import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';

import Message from './Message';

export default class MessageList extends Component {
  render() {

    // should already be sorted by timestamp
    console.log(this.props.messages);
    let messagesList = this.props.messages.map((message) => (
      <Row key={message.from + message.to + message.timeStamp}>
      <Message 
        from={message.from}
        to={message.to}
        timeStamp={message.timeStamp}
        body={message.body}
      />
      </Row>
    ));

    return (
      <Container>
        {messagesList}
      </Container>
    );
  }
}