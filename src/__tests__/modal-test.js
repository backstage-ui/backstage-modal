/* global describe, it, expect */
import React from 'react';
import { mount, shallow, render } from 'enzyme';

import Portal from 'react-portal';

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
      const modal = wrapper.find('.bs-modal');
      expect(modal.hasClass('foobar')).toBe(true);
    });

    it('accepts a width', () => {
      const wrapper = shallow(<Modal width="80%" />);
      const modal = wrapper.find('.bs-modal');
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
    const wrapper = shallow(<Modal />);
    // Force header to render to find close button
    const header = wrapper.find('.bs-modal__header').render();
    const close = header.find('.bs-modal__close');

    expect(close.length).toBe(1);
  });

  it('has a Portal component', () => {
    const wrapper = mount(<Modal />);
    const portal = wrapper.find(Portal);

    expect(portal.length).toBe(1);
  });

  it('starts closed by default', () => {
    const wrapper = shallow(<Modal />);
    const portal = wrapper.find(Portal);

    expect(portal.prop('isOpened')).toEqual(false);
  });

  it('isOpen=false closes the portal', () => {
    const wrapper = shallow(<Modal isOpen={false} />);
    const portal = wrapper.find(Portal);

    expect(portal.prop('isOpened')).toEqual(false);
  });

  it('isOpen=true opens the portal', () => {
    const wrapper = shallow(<Modal isOpen={true} />);
    const portal = wrapper.find(Portal);

    expect(portal.prop('isOpened')).toEqual(true);
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
