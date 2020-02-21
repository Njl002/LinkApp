import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

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
      bio: ""
    }
  }

  componentDidMount() {
    this.getLink(this.state.id);
  }

  getLink(userId) {
    fetch("/api/getUsers", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
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
        bio: user.bio
      });
    });
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.state.imageURL} style={{ width: '18rem'}}/>
      <Card.Body>
        <Card.Title>{this.state.firstName + " " + this.state.lastName}</Card.Title>
        <Card.Text>
          {this.state.bio}
        </Card.Text>
      </Card.Body>
    </Card>
    );
  }
}