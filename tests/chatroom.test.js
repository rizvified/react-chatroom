import React from 'react';
import { render } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';

import Chatroom from '../src/components/chatroom.jsx';
import Conversation from '../src/components/conversation.jsx';
import Form from '../src/components/form.jsx';
import Users from '../src/components/users.jsx';

describe('<Chatroom />', () => {
  it('renders without exploding', () => {
    ReactTestUtils.renderIntoDocument(<Chatroom />);
  });
});
