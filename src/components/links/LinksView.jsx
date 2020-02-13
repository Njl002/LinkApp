import React, { Component } from 'react';
import './css/LinksView.css';
import LinkProfileCard from "./link_profile/LinkProfileCard";

export default class LinksView extends Component {
  render() {
    return (
      <div>
      <h1> Today's Links </h1>
      <div className="row">
        <div className="column">
          <LinkProfileCard />
        </div>
        <div className="column">
          <LinkProfileCard />
        </div>
      </div>

      <div className="row">
        <div className="column">
          <LinkProfileCard />
        </div>
        <div className="column">
          <LinkProfileCard />
        </div>
      </div>
      </div>
    );
  }
}