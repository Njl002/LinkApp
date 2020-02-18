import React, { Component } from 'react';
import { Container, Col, Button} from 'react-bootstrap';

import LoginForm from './LoginForm';


export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  // TODO give login check functionality and add signup functionality
  handleLogin(email, password) {
    
    this.props.onUserSessionUpdate(email, true, "7")
  }

  handleAddUser() {
    this.addUser("Test Name", "Test Description", "http://upload.wikimedia.org/wikipedia/commons/5/5c/Ivan_Sutherland_at_CHM.jpg")
  }

  // TODO put in sign up
  addUser (name, description, imageURL) {
    console.log("adding User: " + name + " " + description + " " + imageURL);
    let data = {
      id: "7",
      name: name,
      description: description,
      imageURL: imageURL
    };
    fetch("/api/addUser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log("Getting response back: ");
        console.log(response);
        this.getLinks();
        return response;
      })
      .catch(error => {
        console.log("Add User error: ");
        console.log(error);
      })
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
        let linkData = data.users.filter(x => x.id === "7");
        console.log("Found user? ");
        console.log(linkData);
      });
    }

  render() {
    return (
      <Container>
        <Col>
          <LoginForm 
            onLogin={this.handleLogin} 
          />
          <Button onClick={this.handleAddUser}>
            Sign Up
          </Button>
        </Col>
      </Container>
    );
  }
}