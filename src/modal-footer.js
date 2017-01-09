import React, { Component } from 'react';
import styles from './modal.css';

export default class ModalFooter extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className="bs-modal__footer" style={styles.footer}>
        {this.props.children}
      </div>
    );
  }
}
