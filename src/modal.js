import React, { Component } from 'react';
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
    this._handleKeyDown = ::this._handleKeyDown;
  }

  componentWillMount() {
    document.addEventListener('keydown', this._handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._handleKeyDown);
  }

  _handleKeyDown(event) {
    if (event.which !== 27) {
      return true;
    }
    this._handleClose();
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

  render() {
    let modalStyle = styles.container;
    if (this.props.width) {
      modalStyle = {...modalStyle, width: this.props.width};
    }
    if (!this.props.isOpen) {
      modalStyle = {...modalStyle, ...styles.hidden};
    }

    return (
      <div className={this.props.className} style={modalStyle}>
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
    );
  }
}
