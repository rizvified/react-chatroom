import React, { Component } from 'react';

class Form extends Component {
  state = {
    text: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    let message = {
      user : this.props.user,
      text : this.state.text
    }
    this.props.onMessageSubmit(message);
    this.setState({ text: '' });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return(
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="enter message"
          />
        </form>
      </div>
    );
  }
}

export default Form;
