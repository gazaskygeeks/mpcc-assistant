import React, { Component } from 'react';
import axios from 'axios';
import './waiver.css';

class Waiver extends Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
    this.handleUploadFile = this.handleUploadFile.bind(this);
    this.state = {};
  }

  upload(e) {
    e.preventDefault();
    const { data, email, headers } = this.state;
    if (this.state.data) {
      axios.post('/submit/signed-waiver/confirm', { data, email, headers });
    } else {
      const h1 = document.createElement('h1');
      h1.textContent = 'Please choose data to upload';
      document.getElementById('uploader').appendChild(h1);
    }
  }

  handleUploadFile(event) {
    const data = new FormData();
    const headers = {
      'Content-Type': 'multipart/form-data'
    };
    data.append('file', event.target.files[0]);
    const email = event.target.parentNode.childNodes[0].value;
    this.setState({ data, headers, email });
  };

  render() {
    return (
      <div id='uploader'>
        <input type='text' name='email' placeholder='Please enter your email...'/>
        <input type='file' name='upload' onChange={this.handleUploadFile} />
        <input type='submit' name='submit' value='submit' onClick={this.upload} />
      </div>
    );
  }
}

export default Waiver;
