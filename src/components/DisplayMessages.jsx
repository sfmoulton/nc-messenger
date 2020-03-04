import React, { Component } from "react";

class DisplayMessages extends Component {
  render() {
    const { messages } = this.props;

    return (
      <div className="chat-display">
        <h1>Display Messages</h1>
        <ul>
          {messages.map(message => {
            return (
              <li>
                {message.username}: {message.message}
                {/* <img src={message.avatar} alt="user avatar"/> */}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DisplayMessages;
