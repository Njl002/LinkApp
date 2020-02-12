import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navConsts } from '../../../constants';
import default_profile_img from '../../resources/blank-profile-picture.png';

export default class LinkProfileCard extends Component {
  render() {
    const {LINKPROFILE} = navConsts;
    return (
      <Card style={{ width: '18rem' }}>
        <Link to={"/" + LINKPROFILE}>
          <Card.Img variant="top" src={default_profile_img} style={{ width: '20rem'}}/>
        </Link>
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