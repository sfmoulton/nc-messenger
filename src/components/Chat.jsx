import React, { Component } from "react";
import PostMessage from "./PostMessage";
import DisplayMessages from "./DisplayMessages";

class Chat extends Component {
  state = {
    username: "",
    avatar: "",
    messages: []
  };

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
