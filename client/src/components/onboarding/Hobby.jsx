import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FiX } from "react-icons/fi";

export default class Hobby extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.onRemove(this.props.index);
  }

  render() {

    return (
      <Button
        bsPrefix="hobby-button"
        onClick={this.handleRemove}>
        {this.props.hobby} <FiX />
      </Button>
    );
  }
}