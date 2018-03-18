import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './personalPicture.css';

class MentorForm extends Component {
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
      axios.post('/submit/offer-picture/confirm',
        { file: data.file,
          mentor_email: data.mentor_email })
        .then(res => console.log('res', res));
    }
  }

  handleUploadFile(event) {
    const file = event.target.files[0];
    if (!file) return this.setState({ error: 'missing File' });
    const mentor_email = event.target.parentNode.childNodes[1].value;
    if (mentor_email === '') return this.setState({ error: 'missing Email' });
    const data = { file, mentor_email };
    this.setState({ data, error: null });
  };

  render() {
    if (this.props.isFetching) {
      return <p>loading</p>;
    } else {
      return (
        <div className='wrapper'>
          <div id='uploader'>
            <h1 className='w-50-fields'>Upload an image of yours</h1>
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
}

MentorForm.propTypes = {
  isFetching: PropTypes.bool
};

export default MentorForm;
