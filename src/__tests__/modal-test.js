/* global describe, it, expect */
import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../modal';

describe('<Modal />', () => {
  it('should accept className', () => {
    const wrapper = shallow(<Modal className="foobar" />);
    expect(wrapper.hasClass('foobar')).toBe(true);
  });
});
