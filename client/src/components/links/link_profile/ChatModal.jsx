import React, { Component } from 'react';
import { Button, Modal, Form, Image } from 'react-bootstrap';

import UserSession from '../../../storage/UserSession';

import { addMessage } from '../../../api';


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
    const addUserPromise = addMessage(data);
    addUserPromise.then(newMessage => {
      console.log("Getting response back: ");
      console.log(newMessage);
      this.props.onHide(); // close modal
    })
    .catch(error => {
      console.log("Add User error: ");
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
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={this.props.imageurl} rounded style={{width:"20rem"}}/>
          <Form>
            <Form.Group>
              <Form.Control 
                type="text" 
                name="messageForm" 
                placeholder="Add a message" 
                onChange={e => this.setState({message: e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.handleSendMessage(this.state.message)}>Send</Button>
          <Button onClick={this.props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
}