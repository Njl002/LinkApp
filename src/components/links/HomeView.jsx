import React, { Component } from 'react';
import './css/HomeView.css';
import ProfileCard from "./link_profile/ProfileCard";

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