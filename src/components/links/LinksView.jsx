import React, { Component } from 'react';
import './css/LinksView.css';

import LinkProfileCard from './link_profile/LinkProfileCard';
import { Container, Row, Col } from 'react-bootstrap';


export default class LinksView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      links : []
    }

    this.populateLinks = this.populateLinks.bind(this);
  }

  populateLinks(data) {
    let stateData = [];
    for (let i = 0; i < data.links.length; i++) {
      let newItem = {
        id: data.links[i].id,
        name: data.links[i].name,
        description: data.links[i].description,
        imageURL: data.links[i].imageURL
      };
      stateData = stateData.concat(newItem);
    }
    this.setState(state => ({
      links: stateData
    }));
  }

  componentDidMount() {
    var data = require('../../backend/data.json');
    this.populateLinks(data);
  }

  render() {

    let list = this.state.links.map((link) => (
      <Col xs={6} md={6}>
      <LinkProfileCard
        key={link.id}
        id={link.id}
        name={link.name}
        description={link.description}
        imageURL={link.imageURL}
      />
      </Col>
    ))

    return (
      <Container>
        <Row >
          <h1> Today's Links </h1>
        </Row>
        <Row>
          {list}
        </Row>
      </Container>
    );
  }
}