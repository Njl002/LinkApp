import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LinkProfileCard from './LinkProfileCard';

import { getAllUsers } from '../../api';

import './css/LinksView.css';
import Images from '../../resources/images/index';

export default class LinksView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      links : []
    }

    this.mapToImageURL = this.mapToImageURL.bind(this);
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

  mapToImageURL(id) {
    if (id !== undefined) {
      if (id === "1") {
        return Images.profile.douglas_engelbart;
      }
      else if (id === "2") {
        return Images.profile.ivan_sutherland;
      }
      else if (id === "3") {
        return Images.profile.lucy_suchman;
      }
      else if (id === "4") {
        return Images.profile.vannevar_bush;
      }
      else if (id === "5") {
        return Images.profile.grace_hopper;
      }
      else if (id === "6") {
        return Images.profile.allen_newell;
      }
      else if (id === "7") {
        return Images.profile.amelia_richardson;
      }
      else if (id === "8") {
        return Images.profile.tracy_kyles;
      }
      else if (id === "9") {
        return Images.profile.edith_boucher;
      }
      else if (id === "10") {
        return Images.profile.david_johnson;
      }
      else if (id === "11") {
        return Images.profile.robert_james;
      }
      else if (id === "12") {
        return Images.profile.allen_newells;
      }
      else if (id === "13") {
        return Images.profile.user_image;
      }
      else if (id === "14") {
        return Images.profile.user_image;
      }
    }
    
  }

  render() {
    
    let list = this.state.links.map((link) => (
      <Col xs={6} md={6} key={link.id} className="profileCardCol">
      <LinkProfileCard
        id={link.id}
        imageURL={this.mapToImageURL(link.id)}
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