/* global describe, it, expect */
import React from 'react';
import { mount, shallow } from 'enzyme';
import Modal from '../modal';

describe('<Modal />', () => {
  it('should accept className', () => {
    const wrapper = shallow(<Modal className="foobar" />);
    expect(wrapper.hasClass('foobar')).toBe(true);
  });

  it('should have a header', () => {
    const wrapper = shallow(<Modal />);
    const header = wrapper.find('.modal-header');
    expect(header.length).toBe(1);
  });

  it('should have a body', () => {
    const wrapper = shallow(<Modal />);
    const header = wrapper.find('.modal-body');
    expect(header.length).toBe(1);
  });

  it('should have a close button', () => {
    const wrapper = shallow(<Modal />);
    const header = wrapper.find('.modal-header');
    const close = header.find('.modal-close');

    expect(close.length).toBe(1);
  });

  it('isOpen false by default', () => {
    const wrapper = shallow(<Modal />);

    expect(wrapper.state('isOpen')).toBe(false);
  });

  it('isOpen by props', () => {
    const wrapper = shallow(<Modal isOpen />);

    expect(wrapper.state('isOpen')).toBe(true);
  });

  it('close should change isOpen to false', () => {
    const wrapper = mount(<Modal isOpen />);
    const close = wrapper.find('.modal-close');

    close.simulate('click');

    expect(wrapper.state('isOpen')).toBe(false);
  });
});
