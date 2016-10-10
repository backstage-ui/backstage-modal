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
        onClick={this.props.onClick}
        onMouseEnter={() => this.setState({isHovered: true})}
        onMouseLeave={() => this.setState({isHovered: false})}
        style={buttonStyle}>
        +
      </span>
    );
  }
}

export default class Modal extends Component {
  static propTypes = {
    className: React.PropTypes.string,
    isOpen: React.PropTypes.bool,
    title: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node,
    ]),
  };

  static defaultProps = {
    isOpen: false,
    title: '',
  };

  constructor(props) {
    super(props);
    this.onCloseClick = ::this.onCloseClick;
  }

  onCloseClick(event) {
    event.preventDefault();
    this.props.onCloseClick();
  }

  render() {
    let modalStyle = styles.container;
    if (!this.props.isOpen) {
      modalStyle = {...modalStyle, ...styles.hidden};
    }

    return (
      <div className={this.props.className} style={modalStyle}>
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <div style={styles.header}>
              <CloseButton onClick={this.onCloseClick} />
              <span style={styles.title}>{this.props.title}</span>
            </div>
            <div style={styles.body}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
