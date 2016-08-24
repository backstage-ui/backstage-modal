import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="modal-header" />
      </div>
    );
  }
}

Modal.propTypes = {
  className: React.PropTypes.string,
};
