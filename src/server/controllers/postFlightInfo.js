const updateMentor = require('../database/queries/updateMentor');
const selectMentorByEmail = require('../database/queries/selectMentorByEmail');

module.exports = (req, res, next) => {
  const { mentor_email } = req.body;
  const { date_of_arrival, time_of_arrival, flight_number } = req.body;
  selectMentorByEmail(mentor_email, (err, data) => {
    if (err) return next(err);
    else if (data.rowCount === 0) {
      return res.send({ update: false, exists: false, msg: 'Mentor Does Not Exists' });
    }
    const mentorData = data.rows[0];
    const info = mentorData.info;
    const newInfo = Object.assign({}, info,
      { fi_date_of_arrival: date_of_arrival,
        fi_time_of_arrival: time_of_arrival,
        fi_flight_number: flight_number }
    );
    mentorData.info = newInfo;
    updateMentor(mentorData, error => {
      if (error) return next(error);

      return res.send({ update: true });
    });
  });
};
