import React, { Component } from 'react';
import { Container, Row, Col, Image, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiMessageSquare, FiArrowLeft } from "react-icons/fi";
import ChatModal from './ChatModal';
import LinkProfileTitle from './LinkProfileTitle';
import LinkProfileBody from './LinkProfileBody';

import { navConsts } from '../../../constants';
import UserSession from '../../../storage/UserSession';

import { getAllUsers, getImage, updateUser } from '../../../api';

import './css/LinkProfileView.css';

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
      blockedUsers: [], 

      modalShow: false
    }

    this.handleCancelUser = this.handleCancelUser.bind(this);
  }

  componentDidMount() {
    this.getLink(this.state.id);
    // this.props.handleTracking();
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
        imageURL: user.imageURL,
      });
    });
  }

  // adds the link's id to this user's blocked users
  handleCancelUser() {
    let userId = UserSession.getId(); // should be set at this point 
    const allUsersPromise = getAllUsers();
    allUsersPromise.then(data => {
      let user = data.users.find(x => x.id === userId);
      console.log(user);
      user.blockedUsers.push(this.state.id);
      return user;
    }).then(user => {
      console.log("update blocked user");
      console.log(user);
      updateUser(user, userId);
      this.props.onBlockUser();
    });
  }

  render() {
    const { LINKS } = navConsts;
    return (
      <Container className="linkProfileViewContainer">
        <Row>
          <LinkProfileTitle
            firstName={this.state.firstName} 
            lastName={this.state.lastName}
            major={this.state.major}
            role={this.state.role}
            schoolName={this.state.schoolName}
            email={this.state.email}
          />
        </Row>
        <Row>
          <Image src={getImage(this.state.id)} className="linkProfileImage"/>
        </Row>
        <Row>
          <LinkProfileBody 
            bio={this.state.bio}
            graduationYear={this.state.yearEnd}
            hometown={this.state.hometown}
            skills={this.state.skills}
            hobbies={this.state.hobbies}
            email={this.state.email}
            schoolName={this.state.schoolName}
          />  
        </Row>

        <Row className="linkProfileBtnRow"> 
          <Col md={{ span: 3, offset: 1 }} xs={{ span: 3, offset: 1 }}> 
            <Link to={"/" + LINKS}> 
              <Button className="linkProfileCancelBtn" onClick={this.handleCancelUser}> 
                X
              </Button> 
            </Link> 
          </Col> 
          <Col md={{ span: 3, offset: 4 }} xs={{ span: 3, offset: 4 }}> 
            <ButtonToolbar>
              <Button className="linkProfileMessageBtn" onClick={() => this.setState({ modalShow: true })}> 
                <FiMessageSquare />
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