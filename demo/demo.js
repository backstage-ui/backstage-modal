/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";
import ReactDOM from "react-dom";

import Modal from "../src/modal";
import ModalBody from "../src/modal-body";
import ModalFooter from "../src/modal-footer";

class Demo extends React.Component {
  constructor(){
    super();
    this.state = {
      isOpen: true
    };

    this.onOpenClick = ::this.onOpenClick;
    this.onCloseRequest = ::this.onCloseRequest;
  }

  onOpenClick(e){
    e.preventDefault();
    this.setState({isOpen: true});
  }

  onCloseRequest(){
    this.setState({isOpen: false});
  }

  render() {
    return (
      <div>
        <header className="heading"><h1>Backstage Modal Demo</h1></header>

        <div className="content">
          <button onClick={this.onOpenClick}>Open</button>

          <Modal title="Modal Demo" isOpen={this.state.isOpen} onCloseRequest={this.onCloseRequest}>
            <p className="full-column">Use plain HTML to cover the full modal width.</p>
            <ModalBody>
              <p>Wrap contents using the <code>ModalBody</code> component to get default padding.</p>
              <p>Wrap contents using the <code>ModalFooter</code> component to get default padding and a separator.</p>
            </ModalBody>
            <ModalFooter>
              <button type="button">ModalFooter</button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("container"));
