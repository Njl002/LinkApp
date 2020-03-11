import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Hobby from "./Hobby";

export default class CurrentHobbies extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(index) {
    this.props.onRemoveHobby(index);
  }

  render() {
    var currentHobbies = this.props.hobbies.map((hobby, index) => {
      return <Hobby key={index} index={index} onRemove={this.handleRemove} hobby={hobby} />
    });
    return (
      <Row>
        {currentHobbies}
      </Row>
    );
  }
}