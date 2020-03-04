import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import ChatProfileTitle from './ChatProfileTitle';
import ChatProfileBody from './ChatProfileBody';


import './css/ChatProfileView.css';

export default class ChatBoxProfileView extends Component {

  render() {
    return (
      <Container className="chatProfileViewContainer">
        <Row>
          <ChatProfileTitle
            firstName={this.props.firstName} 
            lastName={this.props.lastName}
            major={this.props.major}
            role={this.props.role}
            schoolName={this.props.schoolName}
            email={this.props.email}
          />
        </Row>
        <Row>
          <Image src={this.props.imageURL} className="chatProfileImage"/>
        </Row>
        <Row>
          <ChatProfileBody 
            bio={this.props.bio}
            graduationYear={this.props.yearEnd}
            hometown={this.props.hometown}
            skills={this.props.skills}
            hobbies={this.props.hobbies}
            email={this.props.email}
            schoolName={this.props.schoolName}
          />
        </Row>
      </Container>
    );
  }
}