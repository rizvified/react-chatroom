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
    socket.on('user:join', this._userJoined);
    socket.on('user:left', this._userLeft);
  }

  _initialize = data => {
    const { users, name } = data;
    this.setState({users, user: name});
  }

  _messageRecieve = message => {
    const { messages } = this.state;
    messages.push(message);
    this.setState({messages});
  }


  _userJoined = data => {
  	const { users, messages } = this.state;
  	const { name } = data;
  	users.push(name);
  	messages.push({
  		user: 'APPLICATION BOT',
  		text : name +' Joined'
  	});
  	this.setState({users, messages});
  }

  _userLeft = data => {
  	const { users, messages } = this.state;
  	const { name } = data;
  	const index = users.indexOf(name);
  	users.splice(index, 1);
  	messages.push({
  		user: 'APPLICATION BOT',
  		text : name +' Left'
  	});
  	this.setState({users, messages});
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
      <main className='chatroom'>
        <section className='chatroom__left'>
          <Conversation
            messages={ this.state.messages }
          />
          <Form
            onMessageSubmit={ this.handleSubmit }
            user={ this.state.user }
          />
        </section>
        <aside className='chatroom__right'>
          <Users
            users={ this.state.users }
          />
        </aside>
      </main>
    );
  }
}

export default Chatroom;
