import React, { Component } from 'react';
import styles from './modal.css';

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: this.props.isOpen };
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div className={this.props.className} style={styles.modal}>
        <div className="modal-header" style={styles.header}>
          <span className="modal-title" style={styles.title}>
            {this.props.title}
          </span>
          <span className="modal-close" onClick={this.close} />
        </div>
        <div className="modal-body" styles={styles.body}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  className: React.PropTypes.string,
  isOpen: React.PropTypes.bool,
  title: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

Modal.defaultProps = {
  isOpen: false,
  title: '',
};
