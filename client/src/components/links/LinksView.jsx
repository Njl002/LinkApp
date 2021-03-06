import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LinkProfileCard from './LinkProfileCard';

import { getAllUsers, getImage } from '../../api';

import './css/LinksView.css';

export default class LinksView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blockedUsers: [],
      links : []
    }
  }

  componentDidMount() {
    this.getLinks();
    this.props.handleTracking();
  }


  getLinks = () => {
    const allUsersPromise = getAllUsers();
    allUsersPromise.then(data => {
      // get blocked users
      let user = data.users.find(x => x.id === this.props.userId);
      this.state.blockedUsers = user.blockedUsers;
      return data;
    })
    .then (data => {
      let mentorOrMentee = data.users.find(x => x.id === this.props.userId);
      console.log("This user is a " + mentorOrMentee.role);
      return data.users.filter(x => (x.id !== this.props.userId) && (x.role !== mentorOrMentee.role));
    })
    .then (data => {
      // filter on blocked users
      return data.filter(x => !this.state.blockedUsers.includes(x.id))
    })
    .then (data => {
      console.log("Displaying links: ");
      console.log(data);
      this.setState({links: data});
    })
    .catch(error => {
      console.log("Get links error: ");
      console.log(error);
    });
  }

  render() {
    
    // passing a lot of info into props, not all are used
    let list = this.state.links.map((link) => (
      <Col xs={6} md={6} key={link.id} className="profileCardCol">
      <LinkProfileCard
        id={link.id}
        imageURL={getImage(link.id)}
        firstName={link.firstName} 
        lastName={link.lastName}
        schoolName={link.schoolName}
        monthStart={link.monthStart}
        yearStart={link.yearStart}
        monthEnd={link.monthEnd}
        yearEnd={link.yearEnd}
        email={link.email}
        role={link.role}
        hometown={link.hometown}
        major={link.major}
        skills={link.skills}
        hobbies={link.hobbies}
        bio={link.bio}
      />
      </Col>
    ));

    return (
      <Container className="linksContainer">
        <Row className="title">
          <h1> Today's Links </h1>
        </Row>
        <Row className="links">
          {list}
        </Row>
      </Container>
    );
  }
}