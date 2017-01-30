import React, { Component } from 'react';
import styles from './modal.css';

export default class ModalBody extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className="bs-modal__body" style={styles.body}>
        {this.props.children}
      </div>
    );
  }
}
