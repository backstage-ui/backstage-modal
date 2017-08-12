import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './modal.css';

export default class ModalBody extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className="bs-modal__body" style={styles.body}>
        {this.props.children}
      </div>
    );
  }
}
