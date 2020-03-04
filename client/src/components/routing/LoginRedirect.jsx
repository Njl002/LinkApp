import React, { Component } from "react";
import { navConsts } from "../../constants";
import { Redirect } from "react-router-dom";

export default class LoginRedirect extends Component {

  componentDidMount() {
    this.props.handleTracking();
  }

  render() {
    const { LAUNCH, LINKS } = navConsts;
    if (this.props.isAuthenticated) {
      return <Redirect to={LINKS} />;
    } else {
      return <Redirect to={LAUNCH} />;
    }
  }
}
