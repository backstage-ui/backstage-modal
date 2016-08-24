import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <div className={this.props.className} />
    );
  }
}

Modal.propTypes = {
  className: React.PropTypes.string,
};
