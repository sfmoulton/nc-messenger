import React, { Component } from "react";
import PostMessage from "./PostMessage";
import DisplayMessages from "./DisplayMessages";
import io from "socket.io-client";

class Chat extends Component {
  state = {
    username: "",
    avatar: "",
    messages: []
  };

  socket = io('localhost:8080');

  render() {
    return (
      <div>
        <DisplayMessages />
        <PostMessage />
      </div>
    );
  }
}

export default Chat;
