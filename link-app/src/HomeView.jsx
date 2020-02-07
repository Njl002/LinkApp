import React, { Component } from 'react';
import './HomeView.css';
import ProfileCard from "./ProfileCard";

export default class HomeView extends Component {
  render() {
    return (
      <div>
      <h1> Today's Links </h1>
      <div class="row">
        <div class="column">
          <ProfileCard />
        </div>
        <div class="column">
          <ProfileCard />
        </div>
      </div>

      <div class="row">
        <div class="column">
          <ProfileCard />
        </div>
        <div class="column">
          <ProfileCard />
        </div>
      </div>
      </div>
    );
  }
}