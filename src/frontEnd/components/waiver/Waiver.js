import { Form, Modal, Button, Card, Image, Icon, Message } from 'semantic-ui-react';
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import multer from 'multer';
import fs from 'fs';

class Waiver extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.submit = this.submit.bind(this);
    this.state={
      waiver: null
    };
  }

  onDrop(acceptedFiles, rejectedFiles) {
    this.setState({ waiver: acceptedFiles });
  }

  submit() {
    console.log('I\'m here');
    const storage = multer.diskStorage({
      destination: __dirname,
      filename: (req, file, cb) => {
        console.log(req);
        console.log(file);
      }
    });
    axios.post('/submit/signed-waiver/confirm', { file });
    console.log('I think it had sent, but the server cant parse this');
  }

  render() {
    return (
      <div className='uploader'>
        <Dropzone onDrop={ files => this.onDrop(files)}>
        </Dropzone>
        <Button onClick={this.submit}>Submit</Button>
      </div>
    );
  }
}

export default Waiver;
