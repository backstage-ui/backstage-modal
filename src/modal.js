import React, { Component } from 'react';
import Portal from 'react-portal';
import styles from './modal.css';

class CloseButton extends Component {
  constructor(){
    super();
    this.state = {isHovered: false};
  }

  render(){
    let buttonStyle = styles.close;
    if (this.state.isHovered) {
      buttonStyle = {...buttonStyle, ...styles.closeHover};
    }

    return (
      <span
        className="bs-modal__close"
        onClick={this.props.onClick}
        onMouseEnter={() => this.setState({isHovered: true})}
        onMouseLeave={() => this.setState({isHovered: false})}
        style={buttonStyle}>
        +
      </span>
    );
  }
}


export class ModalBody extends Component {
  render(){
    return (
      <div className="bs-modal__body" style={styles.body}>
        {this.props.children}
      </div>
    );
  }
}

export class ModalFooter extends Component {
  render(){
    return (
      <div className="bs-modal__footer" style={styles.footer}>
        {this.props.children}
      </div>
    );
  }
}


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
  };

  static defaultProps = {
    isOpen: false,
    title: '',
    onCloseRequest: () => {}
  };

  constructor(props) {
    super(props);
    this._handleCloseClick = ::this._handleCloseClick;
    this._handleOverlayClick = ::this._handleOverlayClick;
    this._handlePortalClose = ::this._handlePortalClose;
  }

  _handleCloseClick() {
    this._handleClose();
  }

  _handleOverlayClick(event) {
    const classNames = event.target.className.split(' ');
    if (classNames.indexOf('bs-modal__overlay') === -1) {
      return;
    }
    this._handleClose();
  }

  _handleClose() {
    if (!this.props.isOpen) {
      return;
    }
    this.props.onCloseRequest();
  }

  _handlePortalClose() {
    this.props.onCloseRequest();
  }

  render() {
    let modalStyle = styles.container;
    if (this.props.width) {
      modalStyle = {...modalStyle, width: this.props.width};
    }

    const classNames = "bs-modal " + (this.props.className || "");

    return (
      <Portal isOpened={this.props.isOpen} closeOnEsc={true} onClose={this._handlePortalClose}>
        <div className={classNames} style={modalStyle}>
          <div className="bs-modal__overlay" style={styles.overlay} onClick={this._handleOverlayClick}>
            <div style={styles.modal}>
              <div className="bs-modal__header" style={styles.header}>
                <CloseButton onClick={this._handleCloseClick} />
                <span className="bs-modal__title" style={styles.title}>{this.props.title}</span>
              </div>

              {this.props.children}
            </div>
          </div>
        </div>
      </Portal>
    );
  }
}
