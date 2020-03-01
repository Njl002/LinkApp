import React, { Component } from 'react';
import { Container, Row, Col, Image, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChatModal from './ChatModal';

import { navConsts } from '../../../constants';

import { getAllUsers, getImage } from '../../../api';

// is LINKPROFILE routing
export default class LinkProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
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

      modalShow: false
    }

  }

  componentDidMount() {
    this.getLink(this.state.id);
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
    const { LINKS } = navConsts;
    return (
      <Container>
        <Row><h1>{this.state.firstName + " " + this.state.lastName}</h1></Row>
        <Row> <h3>{this.state.major} </h3> </Row>
        <Row> <h3> {this.state.role} </h3> </Row>
        <Row> <Image src={getImage(this.state.id)} rounded style={{ width: '20rem', height: '20rem'}}/> </Row>
        <Row> <Col> <h3> About </h3> <div> {this.state.bio} </div> </Col> </Row>
        <Row> <Col> <h6> Graduation Year </h6> </Col> <Col> <div> {this.state.yearEnd} </div> </Col> </Row>
        <Row> <Col> <h6> Hometown </h6> </Col> <Col> <div> {this.state.hometown} </div> </Col> </Row>
        <Row> <Col> <h4> Skills </h4> <div> {this.state.skills} </div> </Col>  </Row>
        <Row> <Col> <h4> Hobbies </h4> <div> {this.state.hobbies} </div> </Col>  </Row>
        <Row> 
          <Col> <Link to={"/" + LINKS}> <Button> X </Button> </Link> </Col> 
          <Col> 
            <ButtonToolbar>
              <Button onClick={() => this.setState({ modalShow: true })}> 
                Message 
              </Button> 
              <ChatModal show={this.state.modalShow} onHide={() => this.setState({modalShow: false})}
                         name={this.state.firstName + " " + this.state.lastName}
                         imageurl={getImage(this.state.id)} to={this.state.id}
              />
            </ButtonToolbar>
          </Col> 
        </Row>
      </Container>
    );
  }
}