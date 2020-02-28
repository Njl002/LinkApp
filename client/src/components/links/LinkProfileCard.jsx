import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navConsts } from '../../constants';

import './css/LinkProfileCard.css';

export default class LinkProfileCard extends Component {
  render() {
    const {LINKPROFILE} = navConsts;
    return (
      <Card className="profileCard">
        <Card.Title className="profileCardText">{this.props.firstName + " " + this.props.lastName}</Card.Title>
        <Card.Text className="profileCardText">
          {this.props.major}
        </Card.Text>
        <Card.Text className="profileCardText">
          {this.props.role}
        </Card.Text>
          <div className="crop">
            <Link to={"/" + LINKPROFILE + "/" + this.props.id}>
              <Card.Img variant="top" src={this.props.imageURL} className="profileCardImg"/>
            </Link>
          </div>
      </Card>
    );
  }
}