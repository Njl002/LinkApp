// top most, change based on state
// progress bar
//onboardingview is outer
// make new components for each page
// render name form
import React, { Component } from 'react';
import NameForm from './NameForm';
import SchoolForm from './SchoolForm';
import EmailForm from './EmailForm';
import RoleChoice from './RoleChoice';
import NotificationChoice from './NotificationChoice';
import BasicInfoStart from './BasicInfoStart';
import HometownForm from './HometownForm';
import MajorChoice from './MajorChoice';
import SkillsForm from './SkillsForm';
import HobbiesForm from './HobbiesForm';
import BioForm from './BioForm';

export default class OnboardingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handleNextClick() {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
    console.log("This is the current page state: " + this.state.page);
  }

  handlePrevClick() {
    this.setState(prevState => ({
      page: prevState.page - 1
    }));
    console.log("This is the current page state: " + this.state.page);
  }
  
  render() {
    if(this.state.page === 0) {
      return(<NameForm onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 1) {
      return(<SchoolForm onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 2) {
      return(<EmailForm onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 3) {
      return(<RoleChoice onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 4) {
      return (<NotificationChoice onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 5) {
      return (<BasicInfoStart onNextClick={this.handleNextClick}/>);
    } else if (this.state.page === 6) {
      return (<HometownForm onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 7) {
      return (<MajorChoice onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 8) {
      return (<SkillsForm onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 9) {
      return (<HobbiesForm onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    } else if (this.state.page === 10) {
      return (<BioForm onNextClick={this.handleNextClick} onPrevClick={this.handlePrevClick}/>);
    }
  }
}