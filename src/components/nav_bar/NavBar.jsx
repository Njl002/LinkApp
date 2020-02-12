import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { navConsts } from '../../constants';

export default class NavBar extends Component {
  render() {
    const {MESSAGES, PROFILE} = navConsts;
    return (
      <div>
        <Link to={"/"}>
          <Button> Home </Button>
        </Link>
        
        <Link to={"/" + MESSAGES}>
          <Button> Messages </Button>
        </Link>

        <Link to={"/" + PROFILE}>
          <Button> Profile </Button>
        </Link>
        
      </div>
    );
  }
}