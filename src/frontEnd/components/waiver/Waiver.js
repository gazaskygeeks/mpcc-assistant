// import { Modal, Button, Card, Image, Icon, Message } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import React, { Component } from 'react';

class Waiver extends Component {

  render() {
    console.log(Dropzone.onDrop);
    console.log(this.props);
    return (
      <h1>Hello!</h1>
    );
  }
}

export default Waiver;
