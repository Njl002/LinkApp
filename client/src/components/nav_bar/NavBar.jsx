import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FiUser, FiMessageSquare, FiLink} from "react-icons/fi";
import { navConsts } from '../../constants';

import './css/NavBar.css';

export default class NavBar extends Component {
  render() {
    const {LINKS, MESSAGES, USERPROFILE} = navConsts;
    return (
      // todo add images to the links
      <Navbar expand="true" bg="light" fixed="bottom" className='navBar'>
        <Link to={"/" + LINKS}>
          <Navbar.Brand>
            <FiLink />
          </Navbar.Brand>
        </Link>
        <Link to={"/" + MESSAGES}>
          <Navbar.Brand>
            <FiMessageSquare />
          </Navbar.Brand>
        </Link>
        <Link to={"/" + USERPROFILE}>
          <Navbar.Brand>
            <FiUser />
          </Navbar.Brand>
        </Link>
      </Navbar>
    );
  }
}