import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import UserProfileTitle from './UserProfileTitle';
import UserProfileBody from './UserProfileBody';

import UserSession from '../../storage/UserSession';

import { getAllUsers, getImage } from '../../api';

import './css/UserProfileView.css';

export default class UserProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
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
      bio: ""
    }
  }

  componentDidMount() {
    let userId = UserSession.getId(); // should be set at this point 
    console.log("Getting user profile for user " + userId);
    this.getUser(userId);
  }

  getUser(userId) {
    const allUsersPromise = getAllUsers();
    allUsersPromise.then(data => {
      console.log(data);
      let user = data.users.find(x => x.id === userId);
      this.setState({
        id: user.id,
        firstName: user.firstName, 
        lastName: user.lastName,
        // school info
        schoolName: user.schoolName,
        monthStart: user.monthStart,
        yearStart: user.yearStart,
        monthEnd: user.monthEnd,
        yearEnd: user.yearEnd,
        email: user.email,
        // role mentee or mentor
        role: user.role,
        hometown: user.hometown,
        major: user.major,
        skills: user.skills, // to change to list
        hobbies: user.hobbies, // to change to list
        bio: user.bio,
        imageURL: getImage(user.id)
      });
    });
  }

  render() {
    return (
      <Container className="userProfileViewContainer">
        <Row>
          <UserProfileTitle
            firstName={this.state.firstName} 
            lastName={this.state.lastName}
            major={this.state.major}
            role={this.state.role}
            schoolName={this.state.schoolName}
            email={this.state.email}
          />
        </Row>
        <Row>
          <Image src={this.state.imageURL} className="userProfileImage"/>
        </Row>
        <UserProfileBody 
          bio={this.state.bio}
          graduationYear={this.state.yearEnd}
          hometown={this.state.hometown}
          skills={this.state.skills}
          hobbies={this.state.hobbies}
          email={this.state.email}
          schoolName={this.state.schoolName}
        />

      </Container>
    );
  }
}

{/* <Row><h1>{this.state.firstName + " " + this.state.lastName}</h1></Row>
        <Row> <h3>{this.state.major} </h3> </Row>
        <Row> <h3> {this.state.role} </h3> </Row>
        <Row> <Image src={this.state.imageURL} rounded style={{ width: '20rem', height: '20rem'}}/> </Row>
        <Row> <Col> <h3> About </h3> <div> {this.state.bio} </div> </Col> </Row>
        <Row> <Col> <h6> Graduation Year </h6> </Col> <Col> <div> {this.state.yearEnd} </div> </Col> </Row>
        <Row> <Col> <h6> Hometown </h6> </Col> <Col> <div> {this.state.hometown} </div> </Col> </Row>
        <Row> <Col> <h4> Skills </h4> <div> {this.state.skills} </div> </Col>  </Row>
        <Row> <Col> <h4> Hobbies </h4> <div> {this.state.hobbies} </div> </Col>  </Row> */}