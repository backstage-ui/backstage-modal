import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="modal-header">
          <span className="modal-close" />
        </div>
        <div className="modal-body" />
        <div className="modal-footer" />
      </div>
    );
  }
}

Modal.propTypes = {
  className: React.PropTypes.string,
};
