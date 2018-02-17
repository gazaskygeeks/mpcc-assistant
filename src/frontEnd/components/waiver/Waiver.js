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
    const { data, error } = this.state;
    if (error) {
      const h1 = document.createElement('h1');
      h1.textContent = 'Please choose data to upload';
      document.getElementById('uploader').appendChild(h1);
    }
    axios({
      method: 'post',
      url: '/submit/signed-waiver/confirm',
      data
    });
  }

  handleUploadFile(event) {
    const file = event.target.files[0];
    if (!file) return this.setState({ error: 'missingFile' });
    const mentor_email = event.target.parentNode.childNodes[0].value;
    console.log('mentoremail: ', mentor_email);
    if (mentor_email === '') return this.setState({ error: 'missingEmail' });
    const data = new FormData();
    data.append('file', file);
    data.append('mentor_email', mentor_email);
    this.setState({ data });
  };

  render() {
    return (
      <div className='container'>
        <div id='uploader'>
          <input type='text' name='email' placeholder='Please enter your email...'/>
          <input type='file' name='upload' onChange={this.handleUploadFile} />
          <input type='submit' name='submit' value='submit' onClick={this.upload} />
        </div>
      </div>
    );
  }
}

export default Waiver;
