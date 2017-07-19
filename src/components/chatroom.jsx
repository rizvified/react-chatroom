import React, { Component } from 'react';
import io from 'socket.io-client';

import Conversation from './conversation.jsx';
import Form from './form.jsx';
import Users from './users.jsx';

const socket = io.connect();

class Chatroom extends Component {
  state = {
    users: [],
    messages: []
  }

  componentDidMount() {
    socket.on('init', this._initialize);
    socket.on('send:message', this._messageRecieve);
  }

  _initialize = data => {
    let { users, name } = data;
    this.setState((state) => ({users, user: name}));
  }

  _messageRecieve = message => {
    let { messages } = this.state;
    messages.push(message);
    this.setState((state) => ({messages}));
  }

  handleSubmit = message => {
		let { messages } = this.state;
		messages.push(message);
		this.setState((state) => ({messages}));
		socket.emit('send:message', message);
	}

  render() {
    console.log(this.state);
    return (
      <div className='chatroom'>
        <main className='chatroom__left'>
          <Conversation />
          <Form
            onMessageSubmit={ this.handleSubmit }
            user={ this.state.user }
          />
        </main>
        <aside className='chatroom__right'>
          <Users />
        </aside>
      </div>
    );
  }
}

export default Chatroom;
