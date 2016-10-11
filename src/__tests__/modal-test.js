/* global describe, it, expect */
import React from 'react';
import { mount, shallow } from 'enzyme';

import Modal, {ModalBody, ModalFooter} from '../modal';

describe('<Modal />', () => {
  const simulateKeyDown = (keycode) => {
    const event = new Event("keydown");
    event.which = keycode;
    document.dispatchEvent(event);
  };

  describe('props', () => {
    it('accepts a className', () => {
      const wrapper = shallow(<Modal className="foobar" />);
      expect(wrapper.hasClass('foobar')).toBe(true);
    });

    it('accepts a width', () => {
      const wrapper = shallow(<Modal width="80%" />);
      const modal = wrapper.first();
      const elem = modal.first();

      expect(elem.prop('style').width).toEqual('80%');
    });

    it('accepts a title', () => {
      const wrapper = shallow(<Modal title="my title" />);
      const header = wrapper.find('.bs-modal__header');
      const title = header.find('.bs-modal__title');

      expect(title.text()).toBe('my title');
    });

    it('accepts children', () => {
      const wrapper = shallow(
        <Modal>
          <div className="child" />
        </Modal>
      );
      const elem = wrapper.find('.child');
      expect(elem.length).toBe(1);
    });
  });

  it('has a header', () => {
    const wrapper = shallow(<Modal />);
    const header = wrapper.find('.bs-modal__header');
    expect(header.length).toBe(1);
  });

  it('has a close button', () => {
    const wrapper = mount(<Modal />);
    const header = wrapper.find('.bs-modal__header');
    const close = header.find('.bs-modal__close');

    expect(close.length).toBe(1);
  });

  it('starts hidden by default', () => {
    const wrapper = shallow(<Modal />);
    const modal = wrapper.first();
    const elem = modal.first();

    expect(elem.prop('style').visibility).toEqual('hidden');
  });

  it('isOpen=false hides the element', () => {
    const wrapper = shallow(<Modal isOpen={false} />);
    const modal = wrapper.first();
    const elem = modal.first();

    expect(elem.prop('style').visibility).toEqual('hidden');
  });

  it('isOpen=true shows the element', () => {
    const wrapper = shallow(<Modal isOpen={true} />);
    const modal = wrapper.first();
    const elem = modal.first();

    expect(elem.prop('style').visibility).toBe(undefined);
  });

  describe('onCloseRequest callback', () => {
    it('is called on close button click', () => {
      const onClose = jest.fn();
      const wrapper = mount(<Modal isOpen={true} onCloseRequest={onClose} />);
      const close = wrapper.find('.bs-modal__close');

      close.simulate('click');

      expect(onClose.mock.calls.length).toBe(1);
    });

    it('is called on overlay click', () => {
      const onClose = jest.fn();
      const wrapper = mount(<Modal isOpen={true} onCloseRequest={onClose} />);
      const overlay = wrapper.find('.bs-modal__overlay');

      overlay.simulate('click');

      expect(onClose.mock.calls.length).toBe(1);
    });

    it('is called ONLY when opened', () => {
      const onClose = jest.fn();
      const wrapper = mount(<Modal isOpen={false} onCloseRequest={onClose} />);
      const close = wrapper.find('.bs-modal__close');

      close.simulate('click');

      expect(onClose.mock.calls.length).toBe(0);
    });

    it('is NOT called on inner modal click', () => {
      const onClose = jest.fn();
      const wrapper = mount(<Modal isOpen={true} onCloseRequest={onClose} />);
      const header = wrapper.find('.bs-modal__header');

      header.simulate('click');

      expect(onClose.mock.calls.length).toBe(0);
    });

    it('is called on ESC keydown', () => {
      const onClose = jest.fn();
      const wrapper = mount(<Modal isOpen={true} onCloseRequest={onClose} />);

      simulateKeyDown(27);

      expect(onClose.mock.calls.length).toBe(1);
    });

    it('is NOT called when key !== ESC', () => {
      const onClose = jest.fn();
      const wrapper = mount(<Modal isOpen={true} onCloseRequest={onClose} />);

      simulateKeyDown(13);

      expect(onClose.mock.calls.length).toBe(0);
    });

    it('is ONLY called on ESC keydown mounted', () => {
      const onClose = jest.fn();
      const wrapper = mount(<Modal isOpen={true} onCloseRequest={onClose} />);
      wrapper.unmount();

      simulateKeyDown(27);

      expect(onClose.mock.calls.length).toBe(0);
    });
  });
});

describe('<ModalBody />', () => {
  it('accepts children', () => {
    const wrapper = shallow(
      <ModalBody>
        <div className="child" />
      </ModalBody>
    );
    const elem = wrapper.find('.child');
    expect(elem.length).toBe(1);
  });
});

describe('<ModalFooter />', () => {
  it('accepts children', () => {
    const wrapper = shallow(
      <ModalFooter>
        <div className="child" />
      </ModalFooter>
    );
    const elem = wrapper.find('.child');
    expect(elem.length).toBe(1);
  });
});
