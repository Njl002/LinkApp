import React, { Component } from 'react';
import { Button, Modal, Form, Image } from 'react-bootstrap';

import UserSession from '../../../storage/UserSession';

import { addMessage } from '../../../api';

import './css/ChatModal.css';

export default class ChatModal extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };

    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  handleSendMessage(message) {
    console.log("Sending message: " + message);
    let data = {
      to: this.props.to,
      from: UserSession.getId(),
      timeStamp: new Date().toJSON(),
      body: message
    };
    const addMessagePromise = addMessage(data);
    addMessagePromise.then(newMessage => {
      console.log("Getting response back: ");
      console.log(newMessage);
      this.props.onHide(); // close modal
      this.setState({
        message: ""
      });
    })
    .catch(error => {
      console.log("Send message error: ");
      console.log(error);
    })
  }

  render() {

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Modal.Title className="chatModalTitle" id="contained-modal-title-vcenter">
            {this.props.name}
          </Modal.Title>
          <Image src={this.props.imageurl} className="chatModalProfileImage"/>
          <Form >
            <Form.Group>
              <Form.Control className="chatModalMessageBox"
                type="text" 
                name="messageForm" 
                placeholder="Add a message" 
                onChange={e => this.setState({message: e.target.value})}
              />
            </Form.Group>
          </Form>
          <Button className="chatModalSendBtn" onClick={() => this.handleSendMessage(this.state.message)}>Send</Button>
          <Button className="chatModalCancelBtn" onClick={this.props.onHide}>Cancel</Button>
        </Modal.Body>
          
      </Modal>
    );
  }
  
}