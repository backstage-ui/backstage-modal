import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './modal.css';
import Close from './close-icon';

export default class CloseButton extends Component {
  static propTypes = {
    onClick: PropTypes.func,
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
        <Close />
      </span>
    );
  }
}
