import React, { Component } from 'react';
import { string } from 'prop-types';

class Message extends Component {
  render() {
    const { user, text, type } = this.props;
    console.log(type);
    return (
      <div className='message'>
        <span
          className={ type === 'bot' ? 'message--bot' : 'message--chat' }
        >
          <strong>{ user }: </strong>
          <span>{ text }</span>
        </span>
      </div>
    );
  }
}

Message.propTypes = {
  user: string,
  text: string,
};

export default Message;
