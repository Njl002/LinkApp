import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navConsts } from '../../../constants';
import default_profile_img from '../../../resources/blank-profile-picture.png';

// is LINKPROFILE routing
export default class LinkProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      name: "",
      description: "",
      imageUrl: ""
    }
  }

  componentDidMount() {
    let data = require('../../../backend/data.json');
    let linkData = data.links.find(x => x.id === this.state.id);
    this.setState({
      id: linkData.id,
      name: linkData.name,
      description: linkData.description,
      imageURL: linkData.imageURL
    });
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.state.imageURL} style={{ width: '18rem'}}/>
      <Card.Body>
        <Card.Title>{this.state.name}</Card.Title>
        <Card.Text>
          {this.state.description}
        </Card.Text>
      </Card.Body>
    </Card>
    );
  }
}