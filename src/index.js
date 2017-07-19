import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Chatroom from './components/chatroom.jsx';
import './styles/main.scss';

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderApp(Chatroom);

if (module.hot) {
  module.hot.accept('./components/chatroom.jsx', () => { render(Chatroom); });
}
