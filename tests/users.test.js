import React from 'react';
import { shallow } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';

import Users from '../src/components/users.jsx';

describe('<Users />', () => {
  const data = ['foo', 'bar'];

  it('renders without exploding', () => {
    ReactTestUtils.renderIntoDocument(<Users users={ data } />);
  });

  it('renders the messages', () => {
    const wrapper = shallow(<Users users={ data } />);
    expect(wrapper.find('li')).toHaveLength(2);
  });
});
