import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navConsts } from '../../../constants';

export default class LinkProfileCard extends Component {
  render() {
    const {LINKPROFILE} = navConsts;
    return (
      <Card style={{ width: '18rem' }}>
        <Link to={"/" + LINKPROFILE + "/" + this.props.id}>
          <Card.Img variant="top" src={this.props.imageURL} style={{ width: '18rem'}}/>
        </Link>
        <Card.Body>
          <Card.Title>{this.props.firstName + " " + this.props.lastName}</Card.Title>
          <Card.Text>
            {this.props.bio}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}