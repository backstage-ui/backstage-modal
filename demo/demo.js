/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";
import ReactDOM from "react-dom";

import Modal from "../src/modal";

class Demo extends React.Component {
  constructor(){
    super();
    this.state = {
      isOpen: true
    };

    this.onOpenClick = ::this.onOpenClick;
    this.onCloseClick = ::this.onCloseClick;
  }

  onOpenClick(e){
    e.preventDefault();
    this.setState({isOpen: true});
  }

  onCloseClick(){
    this.setState({isOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.onOpenClick}>Open</button>
        <Modal title="Modal Demo" isOpen={this.state.isOpen} onCloseClick={this.onCloseClick}>
          <p>a</p>
          <p>b</p>
          <p>c</p>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("container"));
