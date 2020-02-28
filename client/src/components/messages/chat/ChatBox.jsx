import React, { Component } from 'react';
import { Container, Col, Row, Form, Button} from 'react-bootstrap';
import MessageList from './MessageList';

import './css/ChatBox.css';

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
    
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  handleSendMessage() {
    this.props.onSendMessage(this.state.message);
    this.setState({
      message: ""
    });
  }

  render() {

    return (
      <Container className="chatBoxContainer">
        <MessageList messages={this.props.messages}/>
        <Row className="chatBoxMessageBox">
          <Col xs={10} md={11} className="chatBoxMessageForm">
            <Form >
              <Form.Group>
                <Form.Control 
                  type="text" 
                  name="messageForm" 
                  value={this.state.message}
                  onChange={e => this.setState({message: e.target.value})}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={2} md={1} className="chatBoxMessageButton">
            <Button onClick={this.handleSendMessage} > 
              Send 
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}