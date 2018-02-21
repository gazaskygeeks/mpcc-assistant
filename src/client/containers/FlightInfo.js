import { connect } from 'react-redux';

import FlightInfo from '../components/flightInfo/FlightInfo';

import { postFlightInfo } from '../actions/flightInfoActions/flightInfo';
import { handleInputChange } from '../actions/usersActions/handleInputChangeActions';

const mapStateToProps = state => ({
  isFetching: state.postFlightInfo.isFetching,
  flightInfoResult: state.postFlightInfo.flightInfoResult,
  mentor_email: state.postFlightInfo.mentor_email,
  date_of_arrival: state.postFlightInfo.date_of_arrival,
  time_of_arrival: state.postFlightInfo.time_of_arrival,
  flight_number: state.postFlightInfo.flight_number
});

const mapDispatchToProps = {
  postFlightInfo,
  handleInputChange
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightInfo);
