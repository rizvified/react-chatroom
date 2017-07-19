import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';

import Chatroom from './components/chatroom.jsx';

const renderApp = () => {
  render(
    <Chatroom />,
    document.getElementById('app'),
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/chatroom.jsx', () => {
    render(Chatroom);
  });
}
