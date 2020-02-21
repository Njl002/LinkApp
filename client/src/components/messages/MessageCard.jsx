import React, { Component } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfileModal from './ProfileModal';

import { navConsts } from '../../constants';

export default class MessageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow : false
    }
  }

  render() {
    const { CHAT } = navConsts;

    let partnerId = this.props.partnerId;
    return (
      <Card style={{ width: '100%' }}>
        <Container>
          <Row>
            <Col>
              <Image src={this.props.partnerImageURL} roundedCircle style={{ width: '5rem', height: '6rem', float: 'left' }}
                     onClick={() => this.setState({ modalShow: true })} 
              /> 
              <ProfileModal show={this.state.modalShow} onHide={() => this.setState({modalShow: false})} id={partnerId}/>
            </Col>
            <Link to={CHAT + "/" + partnerId}> 
            <Col>
              <Card.Title> {this.props.partnerName} </Card.Title>
              <Card.Body>
                <Card.Text> {this.props.lastMessage} </Card.Text>
              </Card.Body>
            </Col>
            </Link>
          </Row>
        </Container>
      </Card>
    );
  }
}