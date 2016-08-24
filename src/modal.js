import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="modal-header" />
        <div className="modal-body" />
        <div className="modal-footer" />
      </div>
    );
  }
}

Modal.propTypes = {
  className: React.PropTypes.string,
};
