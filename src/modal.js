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
    height: React.PropTypes.oneOfType([
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

  handlePortalClose() {
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
      <Portal isOpened={this.props.isOpen} closeOnEsc onClose={this.handlePortalClose}>
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
                <CloseButton onClick={this.handleCloseClick} />
              </div>

              {this.props.children}
            </div>
          </div>
        </div>
      </Portal>
    );
  }
}
