import React, { Component } from 'react';
import axios from 'axios';
import './waiver.css';

class Waiver extends Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
    this.handleUploadFile = this.handleUploadFile.bind(this);
    this.state = {
      error: 'missing Email'
    };
  }

  upload(e) {
    e.preventDefault();
    const { data, error } = this.state;
    if (error) {
      document.getElementById('irr').textContent = `Please fill out the ${error} field`;
    } else {
      axios({
        method: 'POST',
        url: '/submit/signed-waiver/confirm',
        data
      });
    }
  }

  handleUploadFile(event) {
    const file = event.target.files[0];
    if (!file) return this.setState({ error: 'missing File' });
    const mentor_email = event.target.parentNode.childNodes[0].value;
    if (mentor_email === '') return this.setState({ error: 'missing Email' });
    const data = new FormData();
    data.append('file', file);
    data.append('mentor_email', mentor_email);
    this.setState({ data, error: null });
  };

  render() {
    return (
      <div className='container'>
        <div id='uploader'>
          <h1 className='w-50-fields'>Upload your signed waiver</h1>
          <input className='w-50-fields' type='text'
            name='email' placeholder='Please enter your email...'/>
          <input className='w-50-fields' type='file'
            name='upload' onChange={this.handleUploadFile} />
          <input className='w-50-fields' type='submit'
            name='submit' value='Upload' onClick={this.upload} />
          <h3 id='irr'></h3>
        </div>
      </div>
    );
  }
}

export default Waiver;
