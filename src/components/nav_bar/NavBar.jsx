import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import { navConsts } from '../../constants';

export default class NavBar extends Component {
  render() {
    const {LINKS, MESSAGES, USERPROFILE} = navConsts;
    return (
      // todo add images to the links
      <Navbar expand="true" bg="light" fixed="bottom" >
        <Link to={"/" + LINKS}>
          <Navbar.Brand>
            Links
          </Navbar.Brand>
        </Link>
        <Link to={"/" + MESSAGES}>
          <Navbar.Brand>
            Messages
          </Navbar.Brand>
        </Link>
        <Link to={"/" + USERPROFILE}>
          <Navbar.Brand>
            Profile
          </Navbar.Brand>
        </Link>
      </Navbar>
    );
  }
}