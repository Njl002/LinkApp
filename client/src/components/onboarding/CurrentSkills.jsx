import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Skill from "./Skill";

export default class CurrentSkills extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(index) {
    this.props.onRemoveSkill(index);
  }

  render() {
    var currentSkills = this.props.skills.map((skill, index) => {
      return <Skill key={index} index={index} onRemove={this.handleRemove} skill={skill} />
    });
    return (
      <Row>
        {currentSkills}
      </Row>
    );
  }
}