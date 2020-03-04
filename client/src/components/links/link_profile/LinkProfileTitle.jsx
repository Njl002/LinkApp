import React, { Component } from 'react';
import { Textfit } from 'react-textfit';

import './css/LinkProfileTitle.css';

export default class LinkProfileTitle extends Component {
  render() {
    return (
      <div className="linkProfileTitle">
        <Textfit mode="single" forceSingleModeWidth={false} max={28}>
           <h2> {this.props.firstName + " " + this.props.lastName} </h2> 
        </Textfit>
        <Textfit mode="single" max={20}>
          {this.props.major}
        </Textfit>
        <Textfit mode="single" max={20}>
          {this.props.schoolName}
        </Textfit>
      </div>
    );
  }
}