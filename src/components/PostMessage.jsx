import React, { Component } from 'react';

class PostMessage extends Component {
 
  //onChange for message input

  render() {
    return (
      <div>
        <form>
          <label> Message:
            <input type="text"/>
          </label>
          <button>Send Message</button>
        </form>
      </div>
    );
  }
}

export default PostMessage;