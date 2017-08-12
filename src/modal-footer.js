import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './modal.css';

export default class ModalFooter extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className="bs-modal__footer" style={styles.footer}>
        {this.props.children}
      </div>
    );
  }
}
