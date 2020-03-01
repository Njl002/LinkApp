import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LinkProfileCard from './LinkProfileCard';

import { getAllUsers, getImage } from '../../api';

import './css/LinksView.css';

export default class LinksView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      links : []
    }
  }

  componentDidMount() {
    this.getLinks();
  }

  // to do filter out self
  getLinks = () => {
    const allUsersPromise = getAllUsers();
    allUsersPromise.then(data => {
      let mentorOrMentee = data.users.find(x => x.id === this.props.userId);
      console.log("This user is a " + mentorOrMentee.role);
      return data.users.filter(x => (x.id !== this.props.userId) && (x.role !== mentorOrMentee.role));
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
        <Row style={{height: "10vh"}}>
          <h1> Today's Links </h1>
        </Row>
        <Row style={{height: "80vh"}}>
          {list}
        </Row>
      </Container>
    );
  }
}