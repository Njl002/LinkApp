import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navConsts } from '../../..constants';
import default_profile_img from '../../../resources/blank-profile-picture.png';

// is LINKPROFILE routing
export default class LinkProfileView extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={default_profile_img} style={{ width: '20rem'}}/>
        <Card.Body>
          <Card.Title>My Profile</Card.Title>
          <Card.Text>
            Temporary text description.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}