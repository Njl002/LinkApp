import React, { Component } from 'react';
import {  Row, Card } from 'react-bootstrap';

import './css/LinkProfileBody.css';

export default class LinkProfileBody extends Component {
  // Bio page
  // Graduation Year + Hometown
  // Skills
  // Hobbies
  render() {
    return (
      <Row className="linkProfileBodyContainer">
        <Card>
          <Card.Title>
            About
          </Card.Title>
          <Card.Body>
              {this.props.bio}
          </Card.Body>
        </Card>

        <Card>
          <Card.Title> Graduation Year </Card.Title>
          <Card.Text> {this.props.graduationYear} </Card.Text>
          <Card.Title> Hometown </Card.Title>
          <Card.Text> {this.props.hometown} </Card.Text>
        </Card>

        <Card>
          <Card.Title> Skills </Card.Title>
          <Card.Body>
            {this.props.skills}
          </Card.Body>
        </Card>

        <Card>
          <Card.Title> Hobbies </Card.Title>
          <Card.Body>
            {this.props.hobbies}
          </Card.Body>
        </Card>

      </Row>
      
    );
  }
}