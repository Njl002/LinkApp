import React, { Component } from 'react';
import { Container, Col, Row, Tabs, Tab, Image } from 'react-bootstrap';

import ChatBox from './ChatBox';

import { getAllUsers, getAllMessages, addMessage } from '../../../api';
import UserSession from '../../../storage/UserSession';

export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      // fields for profile tab
      firstName: "", 
      lastName: "",
      // school info
      schoolName: "",
      monthStart: "",
      yearStart: "",
      monthEnd: "",
      yearEnd: "",
      email: "",
      // role mentee or mentor
      role: "",
      hometown: "",
      major: "",
      skills: "", // to change to list
      hobbies: "", // to change to list
      bio: "",
      imageURL: "",

      // messages for message tab
      messages: []
    }

    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  componentDidMount() {
    this.fillValues(this.state.id);
  }

  fillValues(userId) {
    const allUsersPromise = getAllUsers();
    allUsersPromise.then(data => {
      let link = data.users.find(x => x.id === userId);
      this.setState({
        id: link.id,
        firstName: link.firstName, 
        lastName: link.lastName,
        // school info
        schoolName: link.schoolName,
        monthStart: link.monthStart,
        yearStart: link.yearStart,
        monthEnd: link.monthEnd,
        yearEnd: link.yearEnd,
        email: link.email,
        // role mentee or mentor
        role: link.role,
        hometown: link.hometown,
        major: link.major,
        skills: link.skills, // to change to list
        hobbies: link.hobbies, // to change to list
        bio: link.bio,
        imageURL: link.imageURL
      });
      return userId;
    })
    .then(otherId => {

      const allMessagesPromise = getAllMessages();
      return allMessagesPromise.then(data => {
        console.log("Got messages response: ");
        console.log(data);
        return data.messages.filter(x => {
          return (x.to === UserSession.getId() && x.from === otherId) || (x.from === UserSession.getId() && x.to === otherId);
        });
      }).then((selectMessages) => {
        selectMessages.sort((a,b) => new Date(a.timeStamp) - new Date(b.timeStamp)); // first to latest
        return selectMessages;
      }).then((values) => {
        console.log("Filtered chat log messages: ");
        console.log(values);
        this.setState({messages : values});
      });

    })
    .catch(error => {
      console.log("Fill data error: ");
      console.log(error);
    });
  }

  handleSendMessage(message) {
    console.log("Updating Chat state with message: ");
    console.log(message);
    let data = {
      to: this.state.id,
      from: UserSession.getId(),
      timeStamp: new Date().toJSON(),
      body: message
    };
    const addMessagePromise = addMessage(data);
    addMessagePromise.then(newMessage => {
      console.log("Getting response back: ");
      console.log(newMessage);
      let tempArray = this.state.messages;
      tempArray.push(newMessage);
      return tempArray;
    })
    .then(newMessages => {
      this.setState(prevState => ({
        messages: newMessages
      }));
    })
    .catch(error => {
      console.log("Send message error: ");
      console.log(error);
    })
  }

  render() {
    return (
      <Tabs defaultActiveKey="chat" id="uncontrolled-tab-example">
        <Tab eventKey="chat" title="Home">
          <ChatBox messages={this.state.messages} onSendMessage={this.handleSendMessage}/>
        </Tab>
        <Tab eventKey="profile" title="Profile">
        <Container>
          <Row><h1>{this.state.firstName + " " + this.state.lastName}</h1></Row>
          <Row> <h3>{this.state.major} </h3> </Row>
          <Row> <h3> {this.state.role} </h3> </Row>
          <Row> <Image src={this.state.imageURL} rounded style={{ width: '20rem', height: '20rem'}}/> </Row>
          <Row> <Col> <h3> About </h3> <div> {this.state.bio} </div> </Col> </Row>
          <Row> <Col> <h6> Graduation Year </h6> </Col> <Col> <div> {this.state.yearEnd} </div> </Col> </Row>
          <Row> <Col> <h6> Hometown </h6> </Col> <Col> <div> {this.state.hometown} </div> </Col> </Row>
          <Row> <Col> <h4> Skills </h4> <div> {this.state.skills} </div> </Col>  </Row>
          <Row> <Col> <h4> Hobbies </h4> <div> {this.state.hobbies} </div> </Col>  </Row>
        </Container>
        </Tab>
      </Tabs>
    );
  }
}