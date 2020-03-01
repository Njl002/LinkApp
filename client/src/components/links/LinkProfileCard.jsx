import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Textfit } from 'react-textfit';
import { navConsts } from '../../constants';

import './css/LinkProfileCard.css';

export default class LinkProfileCard extends Component {
  render() {
    const {LINKPROFILE} = navConsts;
    return (
      <Card className="profileCard">
        <Textfit mode="single" forceSingleModeWidth={false} max={32}>
          <Card.Title className="profileCardTitle">
            {this.props.firstName + " " + this.props.lastName}
          </Card.Title>
        </Textfit>
        <Textfit mode="single" max={24}>
          <Card.Text className="profileCardText">
              {this.props.major}
          </Card.Text>
        </Textfit>
        <Card.Text>
          {this.props.role}
        </Card.Text>
        <Link to={"/" + LINKPROFILE + "/" + this.props.id}>
          <Card.Img variant="top" src={this.props.imageURL} className="profileCardImg"/>
        </Link>
      </Card>
    );
  }
}