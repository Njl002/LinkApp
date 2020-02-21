import React, { Component } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import ProfileModal from './ProfileModal';

export default class MessageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow : false
    }
  }

  render() {
    return (
      <Card style={{ width: '100%' }}>
        <Container>
          <Row>
            <Col>
              <Image src={this.props.partnerImageURL} roundedCircle style={{ width: '5rem', height: '6rem', float: 'left' }}
                     onClick={() => this.setState({ modalShow: true })} 
              /> 
              <ProfileModal show={this.state.modalShow} onHide={() => this.setState({modalShow: false})} id={this.props.id}/>
            </Col> 
            <Col>
              <Card.Title> {this.props.partnerName} </Card.Title>
              <Card.Body>
                <Card.Text> {this.props.lastMessage} </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    );
  }
}