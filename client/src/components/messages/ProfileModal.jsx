import React, { Component } from 'react';
import { Container, Modal, Image, Row, Col } from 'react-bootstrap';

import { getAllUsers } from '../../api';


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
        </Modal.Body>
      </Modal>
    );
  }
  
}