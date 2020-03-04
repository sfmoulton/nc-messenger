import React, { Component } from "react";
import PostMessage from "./PostMessage";
import DisplayMessages from "./DisplayMessages";
import io from "socket.io-client";

class Chat extends Component {
  state = {
    username: "Nick",
    avatar:
      "https://i.insider.com/5d9c9744695b586359090926?width=1100&format=jpeg&auto=webp",
    messages: []
  };

  socket = io("localhost:8080");

  render() {
    const { messages } = this.state;

    return (
      <div>
        <DisplayMessages messages={messages} />
        <PostMessage />
      </div>
    );
  }
}

export default Chat;
