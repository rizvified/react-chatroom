import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';

import Message from './message.jsx';

class Conversation extends Component {
  render() {
    const data = this.props.messages;
    return (
      <section className='conversation'>
        <h2> Conversation: </h2>
        {
            data.map((message, index) => (
              <Message
                key={ index }
                user={ message.user }
                text={ message.text }
              />
              ))
          }
      </section>
    );
  }
}

Conversation.propTypes = {
  messages: arrayOf(object),
};

export default Conversation;
