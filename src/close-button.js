import React, { Component } from 'react';
import styles from './modal.css';

export default class CloseButton extends Component {
  static propTypes = {
    onClick: React.PropTypes.func,
  };

  constructor() {
    super();
    this.state = { isHovered: false };
  }

  render() {
    let buttonStyle = styles.close;
    if (this.state.isHovered) {
      buttonStyle = { ...buttonStyle, ...styles.closeHover };
    }

    return (
      <span
        className="bs-modal__close"
        onClick={this.props.onClick}
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
        style={buttonStyle}
      >
        +
      </span>
    );
  }
}
