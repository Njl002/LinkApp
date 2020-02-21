import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import MessageCard from './MessageCard';

import UserSession from '../../storage/UserSession';

export default class MessagesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }

  }

  componentDidMount() {
    let userId = UserSession.getId(); // should be set at this point 
    let matchingMessages = this.getMessages(userId, this.first);

    console.log(matchingMessages);
    this.setState({
      messages: matchingMessages
    });
  }
  first(list, callback) {
    list.sort((a,b) => new Date(b.timeStamp) - new Date(a.timeStamp)); // latest to first
    //console.log("Sorted: " + JSON.stringify(list));
    return callback(list);
  }
  second(list) {
    let latestMessages = [];
    list.forEach(message => {
      let found = false;
      latestMessages.forEach(savedMessage => {
        if ((message.to === savedMessage.to && message.from === savedMessage.from) ||
              (message.to === savedMessage.from && message.from === savedMessage.to)) {
            found = true;
        }
      });
      if (!found) {
        // add new field
        message['name'] = message
        latestMessages.push(message);
      }
    });
    return latestMessages;
  }
  getMessages(userId, callback) {
    // todo add to database
    var messageData = require("../../messages.json");
    let messageList = messageData.messages.filter(x => x.to === userId || x.from === userId);
    return callback(messageList, this.second);
  }

  render() {
    let messageList = this.state.messages.map((messageCard) => (
      <Col xs={12} md={9} key={messageCard.to + messageCard.from}>
      <MessageCard
        name={"temp"}
        lastMessage={messageCard.body}
        imageURL={"temp link"}
      />
      </Col>
    ));

    return (
      <Container>
        <Row >
          <h1> Messages </h1>
        </Row>
        <Row>
          {messageList}
        </Row>
      </Container>
    );
  }
}