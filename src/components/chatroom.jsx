import React, { Component } from 'react';
import io from 'socket.io-client';

import Conversation from './conversation.jsx';
import Form from './form.jsx';

const socket = io.connect();

class Chatroom extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    socket.on('init', this._initialize);
  }

  _initialize = (data) => {
    let { users, name } = data;
    console.log(data);
    // this.setState((state) => {users: {user: name}});
    this.setState({users, user: name});
  }

  render() {
    return (
      <main className='chatroom'>
        <Conversation />
        <Form />
      </main>
    );
  }
}

export default Chatroom;
