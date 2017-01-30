import React, { Component } from 'react';
import Portal from 'react-portal';
import styles from './modal.css';
import CloseButton from './close-button.js';

export ModalBody from './modal-body.js';

export default class Modal extends Component {
  static propTypes = {
    className: React.PropTypes.string,
    isOpen: React.PropTypes.bool,
    width: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    title: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node,
    ]),
    onCloseRequest: React.PropTypes.func,
  };

  static defaultProps = {
    isOpen: false,
    title: '',
    onCloseRequest: () => {},
  };

  constructor(props) {
    super(props);
    this.handleCloseClick = ::this.handleCloseClick;
    this.handleOverlayClick = ::this.handleOverlayClick;
    this.handlePortalClose = ::this.handlePortalClose;
  }

  handleCloseClick() {
    this.handleClose();
  }

  handleOverlayClick(event) {
    const classNames = event.target.className.split(' ');
    if (classNames.indexOf('bs-modal__overlay') === -1) {
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

  handlePortalClose() {
    this.props.onCloseRequest();
  }

  render() {
    let modalStyle = styles.container;
    if (this.props.width) {
      modalStyle = { ...modalStyle, width: this.props.width };
    }

    const classNames = `bs-modal ${this.props.className || ''}`;

    return (
      <Portal isOpened={this.props.isOpen} closeOnEsc onClose={this.handlePortalClose}>
        <div onKeyDown={this.handleKeyDown} className={classNames} style={modalStyle}>
          <div
            className="bs-modal__overlay"
            style={styles.overlay}
            onClick={this.handleOverlayClick}
          >
            <div style={styles.modal}>
              <div className="bs-modal__header" style={styles.header}>
                <CloseButton onClick={this.handleCloseClick} />
                <span
                  className="bs-modal__title"
                  style={styles.title}
                >
                  {this.props.title}
                </span>
              </div>

              {this.props.children}
            </div>
          </div>
        </div>
      </Portal>
    );
  }
}
