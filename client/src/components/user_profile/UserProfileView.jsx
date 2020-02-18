import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import default_profile_img from '../../resources/blank-profile-picture.png';

export default class UserProfileView extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={default_profile_img} style={{ width: '18rem'}}/>
        <Card.Body>
          <Card.Title>Profile</Card.Title>
          <Card.Text>
            Temporary text description.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}