# backstage-modal

[![Build Status](https://travis-ci.org/backstage-ui/backstage-modal.png?branch=master)](https://travis-ci.org/backstage-ui/backstage-modal)

Backstage Modal React component

## Installing

```bash
npm install backstage-modal --save
```

## Components

### `<Modal />`

Main component that includes the overlay, the modal window and its contents.

Use `children` to render the inner content of the modal window.

#### Props

* `isOpen`: flag indicating wether the modal is opened or not (default `false`);
* `title`: title of the modal window;
* `width`: CSS width of the modal window (default `500px`);
* `onCloseRequest`: callback called when the user attempts to close the modal:
  * by clicking on the close button;
  * by clicking on the overlay;
  * by pressing the ESC key.

### `<ModalBody />`

Optional child component to wrap content and get some nice default styles.

### `<ModalFooter />`

Optional child component to wrap content and get some nice default styles along
with a separator.


## Example

```js
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Modal, {ModalBody, ModalFooter} from 'backstage-modal';

class Example extends Component {
  constructor(){
    this.state = {
      isOpen: true
    };
  }

  onCloseRequest(){
    this.setState({isOpen: false});
  }

  render(){
    return (
      <Modal isOpen={this.state.isOpen} title="Backstage Modal" onCloseRequest={() => this.onCloseRequest}>
        <ModalBody>
          <p>Body</p>
        </ModalBody>
        <ModalFooter>
          <button type="button">OK</button>
        </ModalFooter>
      </Modal>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('container'));
```
