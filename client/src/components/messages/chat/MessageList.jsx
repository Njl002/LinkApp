import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';

import Message from './Message';

export default class MessageList extends Component {

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }  

  render() {

    // should already be sorted by timestamp
    console.log(this.props.messages);
    let messagesList = this.props.messages.map((message) => (

      // if a receiving message and timestamp is the largest 
      (message.from === this.props.userId) &&
            (this.props.messages.slice().reverse().find(message => message.from === this.props.userId).timeStamp === message.timeStamp)
      ) ?
      (
          <Message 
            key={message.from + message.to + message.timeStamp}
            from={message.from}
            to={message.to}
            timeStamp={message.timeStamp}
            body={message.body}
            imageURL={this.props.imageURL}
            displayImage={true}
          />
      ) : (
          <Message 
            key={message.from + message.to + message.timeStamp}
            from={message.from}
            to={message.to}
            timeStamp={message.timeStamp}
            body={message.body}
            imageURL={this.props.imageURL}
            displayImage={false}
          />
      )      
    );

    return (
      <div>
        {messagesList}
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    );
  }
}