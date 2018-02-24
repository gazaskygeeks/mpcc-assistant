import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

import './flightInfo.css';
class FlightInfo extends Component {
  constructor() {
    super();
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleInputChange(e, { name, value }) {
    const { handleInputChange } = this.props;
    handleInputChange(name, value);
  }
  _handleSubmit() {
    const { mentor_email, date_of_arrival, time_of_arrival, flight_number, postFlightInfo } = this.props;
    postFlightInfo(mentor_email, date_of_arrival, time_of_arrival, flight_number);
  }

  render() {
    const { flightInfoResult } = this.props;

    return (
      <div className='flightInfo'>
        <Form className='form-signin'>
          <h3 className='title'> Flight Information </h3>
          <div className='ui form'>
            <div className='inline field'>
              <label>Email</label>
              <Form.Input className='input'
                name='mentor_email'
                onChange={this._handleInputChange}
                type='text'
                placeholder='Flight Number:'/>
            </div>
            <div className='inline field'>
              <label>Date</label>
              <Form.Input className='input'
                name='date_of_arrival'
                onChange={this._handleInputChange}
                type='date'
                placeholder='Date:'/>
            </div>
            <div className='inline field'>
              <label>Time</label>
              <Form.Input className='input'
                name='time_of_arrival'
                onChange={this._handleInputChange}
                type='text'
                placeholder='Time:'/>
            </div>
            <div className='inline field'>
              <label>Flight Number</label>
              <Form.Input className='input'
                name='flight_number'
                onChange={this._handleInputChange}
                type='text'
                placeholder='Flight Number:'/>
            </div>
          </div>
          {!flightInfoResult.exists &&
            <div className='err-msg'>
              <span>{flightInfoResult.msg}</span>
            </div>
          }
          <Button
            onClick={this._handleSubmit}
            type='submit'>Submit</Button>
        </Form>
        {flightInfoResult.update? window.location.reload():null}
      </div>
    );
  }
}

export default FlightInfo;
