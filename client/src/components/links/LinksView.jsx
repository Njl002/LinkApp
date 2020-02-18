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

    this.getLinks = this.getLinks.bind(this);
  }

  componentDidMount() {
    this.getLinks();
  }

  // to do filter out self
  getLinks = () => {
    fetch("/api/getUsers", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      let linkData = data.users.filter(x => x.id !== this.props.userId);
      this.setState({links: linkData});
    });
  }

  render() {

    let list = this.state.links.map((link) => (
      <Col xs={6} md={6} key={link.id}>
      <LinkProfileCard
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