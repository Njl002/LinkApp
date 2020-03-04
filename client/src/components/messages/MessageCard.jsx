import React, { Component } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfileModal from './ProfileModal';

import { navConsts } from '../../constants';

import './css/MessageCard.css';

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
      <Card style={{ width: '100%', height: '15vh'}}>
        <Container>
          <Row>
            <Col xs={3} md={3} className="messageCardLeft">
              <Image src={this.props.partnerImageURL} roundedCircle className="messageCardImg"
                     onClick={() => this.setState({ modalShow: true })} 
              /> 
              <ProfileModal show={this.state.modalShow} imageURL={this.props.partnerImageURL} onHide={() => this.setState({modalShow: false})} id={partnerId}/>
            </Col>
            
            <Col xs={9} md={9}>
            <Link to={CHAT + "/" + partnerId} className="messageCardRight"> 
              <Card.Body className="messageCardBody">
                <Card.Title className="messageCardText"> {this.props.partnerName} </Card.Title>
                <Card.Text className="messageCardText"> {this.props.lastMessage} </Card.Text>
              </Card.Body>
              </Link>
            </Col>
          </Row>
        </Container>
      </Card>
    );
  }
}