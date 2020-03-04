import React, { Component } from "react";

class PostMessage extends Component {

 
  state = {message: ''}


  render() {
    return (
      <div>

        <form onSubmit={() => {this.props.onSubmit(this.state.message)}}>
          <label> Message:
            <input type="text" onChange={this.onChange}/>

          </label>
          <button>Send Message</button>
        </form>
      </div>
    );
  }

  onChange = (e) => {
    this.setState({message: e.target.value})
  }
}

export default PostMessage;
