import React, { Component } from 'react';
import { string } from 'prop-types';

class Message extends Component {
  render() {
    const { user, text } = this.props;
    return (
      <div className='message'>
        <strong>{ user } :</strong>
        <span> { text }</span>
      </div>
    );
  }
}

Message.propTypes = {
  user: string,
  text: string,
};

export default Message;
