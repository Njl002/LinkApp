import React, { Component } from 'react';
import { Container, Col, Row, Form, Button} from 'react-bootstrap';
import MessageList from './MessageList';

import UserSession from './../../../storage/UserSession';
import { addMessage } from './../../../api';

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
      <Container>
        <MessageList messages={this.props.messages}/>
        <Row> 
          <Form>
            <Form.Group>
              <Form.Control 
                type="text" 
                name="messageForm" 
                value={this.state.message}
                onChange={e => this.setState({message: e.target.value})}
              />
            </Form.Group>
          </Form>
          <Button onClick={this.handleSendMessage}> > </Button>
        </Row>
      </Container>
    );
  }
}