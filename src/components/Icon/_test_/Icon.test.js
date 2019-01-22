import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Icon from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('Icon components-test', () => {
  const ADD = 'add';
  test('Icon test if icon-name is passed correctly', () => {
    // Note: These kind of test are redundant if we are properly type-checking
    // Render an Icon with ADD
    const wrapper = shallow(<Icon name={ADD} />);
    expect(wrapper.dive().props().children).toEqual(ADD);
  });

  test('Icon test if onClick works', () => {
    // Render an Icon with onClick method
    const onClick = sinon.spy();
    const wrapper = shallow(<Icon name={ADD} onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick.callCount).toEqual(1);
  });
});
