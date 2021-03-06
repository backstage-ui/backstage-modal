import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from 'react-portal-stateless';
import styles from './modal.css';
import CloseButton from './close-button.js';

export ModalBody from './modal-body.js';
export ModalFooter from './modal-footer.js';

export default class Modal extends Component {
  static propTypes = {
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    title: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    onCloseRequest: PropTypes.func,
  };

  static defaultProps = {
    isOpen: false,
    title: '',
    onCloseRequest: () => {},
  };

  constructor(props) {
    super(props);
    this.handleOverlayClick = ::this.handleOverlayClick;
    this.handleClose = ::this.handleClose;
  }

  handleOverlayClick(event) {
    const classNames = event.target.classList;
    if (classNames.contains('bs-modal__overlay') === false) {
      return;
    }
    this.handleClose();
  }

  handleClose() {
    if (!this.props.isOpen) {
      return;
    }
    this.props.onCloseRequest();
  }

  render() {
    let modalStyle = styles.modal;
    if (this.props.width) {
      modalStyle = { ...modalStyle, width: this.props.width };
    }
    if (this.props.height) {
      modalStyle = { ...modalStyle, height: this.props.height };
    }

    const classNames = `bs-modal ${this.props.className || ''}`;

    return (
      <Portal isOpen={this.props.isOpen} closeOnEsc onClose={this.handleClose}>
        <div onKeyDown={this.handleKeyDown} className={classNames} style={styles.container}>
          <div
            className="bs-modal__overlay"
            style={styles.overlay}
            onClick={this.handleOverlayClick}
          >
            <div style={modalStyle}>
              <div className="bs-modal__header" style={styles.header}>
                <span
                  className="bs-modal__title"
                  style={styles.title}
                >
                  {this.props.title}
                </span>
                <CloseButton onClick={this.handleClose} />
              </div>

              {this.props.children}
            </div>
          </div>
        </div>
      </Portal>
    );
  }
}
