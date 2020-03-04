import React, { Component } from 'react';
import { Container, Modal, Image, Row, Col } from 'react-bootstrap';
import ModalProfileTitle from './ModalProfileTitle';
import ModalProfileBody from './ModalProfileBody';

import { getAllUsers, getImage } from '../../api';

import './css/ProfileModal.css';

export default class ChatModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
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
    }
  }

  componentDidMount() {
    this.getLink(this.props.id);
  }

  getLink(userId) {
    const allUsersPromise = getAllUsers();
    allUsersPromise.then(data => {
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
        imageURL: user.imageURL
      });
    });
  }

  render() {

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.state.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Container className="modalProfileContainer">
          <Row>
            <ModalProfileTitle
              firstName={this.state.firstName} 
              lastName={this.state.lastName}
              major={this.state.major}
              role={this.state.role}
              schoolName={this.state.schoolName}
              email={this.state.email}
            />
          </Row>
          <Row>
            <Image src={this.props.imageURL} className="modalProfileImage"/>
          </Row>
          <Row>
            <ModalProfileBody 
              bio={this.state.bio}
              graduationYear={this.state.yearEnd}
              hometown={this.state.hometown}
              skills={this.state.skills}
              hobbies={this.state.hobbies}
              email={this.state.email}
              schoolName={this.state.schoolName}
            />
          </Row>
          </Container>

        </Modal.Body>
      </Modal>
    );
  }
  
}