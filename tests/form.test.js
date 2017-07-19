import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';

import Form from '../src/components/form.jsx';
import Message from '../src/components/message.jsx';

describe('<Form />', () => {
  const name = 'foo';
  const handler = jest.fn();

  it('renders without exploding', () => {
    ReactTestUtils.renderIntoDocument(<Form
      onMessageSubmit={ handler }
      user={ name }
    />);
  });

  it('renders a form', () => {
    const wrapper = shallow(<Form
      onMessageSubmit={ handler }
      user={ name }
    />);
    expect(wrapper.find('form')).toHaveLength(1);
  });


  it('changes value upon input ', () => {
    const wrapper = shallow(<Form
      onMessageSubmit={ handler }
      user={ name }
    />);
    const handler2 = jest.fn(e => wrapper.setState({ text: e.target.value }));
    const e = {
      target: { value: 'Foo' },
    };
    wrapper.find('input').simulate('change', e);
    handler2(e);
    expect(handler2).toHaveBeenCalled();
    expect(wrapper.state('text')).toEqual('Foo');
  });

  it('submits the form', () => {
    const wrapper = mount(<Form
      onMessageSubmit={ handler }
      user={ name }
    />);
    wrapper.setState({ text: 'Foo' });
    wrapper.find('form').simulate('submit');
    expect(wrapper.state('text')).toEqual('');
    expect(handler).toHaveBeenCalled();
  });
});
