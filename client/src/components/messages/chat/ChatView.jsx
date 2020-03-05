import React, { Component } from 'react';
import { Container, Col, Row, Tab, Image, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import ChatBox from './ChatBox';
import ChatProfileView from './ChatProfileView';

import { navConsts } from '../../../constants';
import { getAllUsers, getAllMessages, addMessage, getImage } from '../../../api';
import UserSession from '../../../storage/UserSession';

import './css/ChatView.css';

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
    // id is the other user
    this.fillValues(this.state.id);
    this.props.handleTracking();
  }

  fillValues(userId) {
    const allUsersPromise = getAllUsers();
    allUsersPromise.then(data => {
      let link = data.users.find(x => x.id === userId);
      console.log("Filling user data: ");
      console.log(link);
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
        imageURL: link.imageURL,

        messageToSend: ""
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

  handleSendMessage() {
    console.log("Updating Chat state with message: ");
    console.log(this.state.messageToSend);
    let data = {
      to: this.state.id,
      from: UserSession.getId(),
      timeStamp: new Date().toJSON(),
      body: this.state.messageToSend
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
        messages: newMessages,
        messageToSend: ""
      }));
    })
    .catch(error => {
      console.log("Send message error: ");
      console.log(error);
    })
  }

  render() {
    const { MESSAGES } = navConsts;


    return (
      <Container className="chatViewContainer">
        <Row className="chatViewName">
          <Col xs={3} md={3} lg={3}>
            <Link to={"/" + MESSAGES}>
              <Button variant="primary" type="submit" bsPrefix="chatView-back_button">
                <FiChevronLeft />
              </Button>
            </Link>
          </Col>
          <h3> {this.state.firstName + " " + this.state.lastName} </h3>
        </Row>
        <Row className="chatViewContent">
          <Tab.Container id="chatview" defaultActiveKey="message">
            <Nav variant="tabs" className="chatViewTabbing">
              <Nav.Item className="chatTab">
                <Nav.Link eventKey="message">Message</Nav.Link>
              </Nav.Item>
              <Nav.Item className="chatTab">
                <Nav.Link eventKey="profile"> Profile </Nav.Link>
              </Nav.Item>
            </Nav>
            <Row className="chatViewBody">
              <Col sm={12} md={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="message">
                    <ChatBox messages={this.state.messages} userId={this.state.id} imageURL={getImage(this.state.id)} onSendMessage={this.handleSendMessage}/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="profile">
                    <ChatProfileView 
                      firstName={this.state.firstName} 
                      lastName={this.state.lastName}
                      major={this.state.major}
                      role={this.state.role}
                      schoolName={this.state.schoolName}
                      email={this.state.email}
                      bio={this.state.bio}
                      graduationYear={this.state.yearEnd}
                      hometown={this.state.hometown}
                      skills={this.state.skills}
                      hobbies={this.state.hobbies}
                      imageURL={getImage(this.state.id)}
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
            
            <Row className="chatViewMessageBox">
              <Col xs={10} md={11} className="chatViewMessageForm">
                <Form >
                  <Form.Group>
                    <Form.Control 
                      type="text" 
                      name="messageForm" 
                      value={this.state.messageToSend}
                      onChange={e => this.setState({messageToSend: e.target.value})}
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={2} md={1} className="chatViewMessageButtonContainer">
                <Button onClick={this.handleSendMessage} bsPrefix="chatViewSendMessageButton"> 
                  Send 
                </Button>
              </Col>
            </Row>

          </Tab.Container>
        </Row>
      </Container>
      
    );
  }
}