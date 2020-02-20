import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import default_profile_img from '../../resources/blank-profile-picture.png';

import UserSession from '../../storage/UserSession';


export default class UserProfileView extends Component {
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
    let priorId = UserSession.getId() || null;

    this.getLink(priorId);
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
      console.log(userId);
      let linkData = data.users.find(x => x.id === userId);
      this.setState({
        id: linkData.id,
        name: linkData.name,
        description: linkData.description,
        imageURL: linkData.imageURL
      });
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