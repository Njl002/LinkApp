import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import MessageCard from './MessageCard';

import { getAllUsers, getAllMessages } from '../../api';
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
    const displayMessagesPromise = this.getDisplayMessages(userId);
    displayMessagesPromise.then((values) => {
      console.log(values);
      this.setState({
        messages: values
      });
    }).catch(error => {
      console.log("setting messages view state error: ");
      console.log(error);
    })
  }

  getDisplayMessages(userId) {
    const usersPromise = getAllUsers();
    //console.log(usersPromise);
    return usersPromise.then(data => {
      console.log("Got users response: ");
      console.log(data);
      return data.users;
    }).then((allUsers) => {
      
        const messagesPromise = getAllMessages();
        return messagesPromise.then(data => {
          console.log("Got messages response: ");
          console.log(data);
          return data.messages.filter(x => x.to === userId || x.from === userId);;
        }).then((selectMessages) => {
          selectMessages.sort((a,b) => new Date(b.timeStamp) - new Date(a.timeStamp)); // latest to first
          return selectMessages;
        }).then((list) => {
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
        }).then((latestMessages) => {
          // add imageURL name from all users
          latestMessages.forEach(message => {
            let toAddName = "";
            let toAddImage = "";
            // find the other user
            if (message.to !== userId) {
              let user = allUsers.find(x => x.id === message.to);
              toAddName = user.firstName + " " + user.lastName;
              toAddImage = user.imageURL;
            }
            else if (message.to === userId) {
              let user = allUsers.find(x => x.id === message.from);
              toAddName = user.firstName + " " + user.lastName;
              toAddImage = user.imageURL;
            }
            message['name'] = toAddName;
            message['imageURL'] = toAddImage;
          });
          console.log("Filtered messages: ");
          console.log(latestMessages);
          return latestMessages;

        }).catch(error => {
          console.log("Get all messages error: ");
          console.log(error);
        });
      
      }).catch(error => {
          console.log("Get all users error: ");
          console.log(error);
      });
  }

  render() {
    let messageList = this.state.messages.map((messageCard) => (
      <Row key={messageCard.to + messageCard.from + messageCard.timeStamp}>
      <Col xs={12} md={12}>
      <MessageCard
        partnerId={(messageCard.to === UserSession.getId() ? (messageCard.from) : (messageCard.to))}
        partnerName={messageCard.name}
        lastMessage={messageCard.body}
        partnerImageURL={messageCard.imageURL}
      />
      </Col>
      </Row>
    ));

    return (
      <Container>
        <Row >
          <h1> Messages </h1>
        </Row>
        {messageList}
      </Container>
    );
  }
}