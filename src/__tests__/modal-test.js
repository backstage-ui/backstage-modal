/* global describe, it, expect */
import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../modal';

describe('<Modal />', () => {
  it('should accept className', () => {
    const wrapper = shallow(<Modal className="foobar" />);
    expect(wrapper.hasClass('foobar')).toBe(true);
  });

  it('should have a header', () => {
    const wrapper = shallow(<Modal className="foobar" />);
    const header = wrapper.find('.modal-header');
    expect(header.length).toBe(1);
  });

  it('should have a body', () => {
    const wrapper = shallow(<Modal className="foobar" />);
    const header = wrapper.find('.modal-body');
    expect(header.length).toBe(1);
  });
});
