import React, { Component } from 'react';
import PostMessage from './PostMessage';
import DisplayMessages from './DisplayMessages';

class Chat extends Component {
  state = {
    username: '',
    avatar: '',
    messages: []
  };

  render() {
    return (
      <div>
        <DisplayMessages />
        <PostMessage onSubmit={this.onSubmit} />
      </div>
    );
  }

  onSubmit = message => {
    this.setState(currentState => {
      return {
        messages: [
          ...currentState.messages,
          { username: this.state.username, message }
        ]
      };
    });
  };
}

export default Chat;
