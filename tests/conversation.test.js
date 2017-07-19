import React from 'react';
import { shallow } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';

import Conversation from '../src/components/conversation.jsx';
import Message from '../src/components/message.jsx';

describe('<Conversation />', () => {
  const data = [{ text: 'sample', user: 'foo' }, { text: 'sample 2', user: 'bar' }];

  it('renders without exploding', () => {
    ReactTestUtils.renderIntoDocument(<Conversation messages={ data } />);
  });

  it('renders the messages', () => {
    const wrapper = shallow(<Conversation messages={ data } />);
    expect(wrapper.find(Message)).toHaveLength(2);
  });
});
