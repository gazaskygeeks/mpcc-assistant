const selectMentors = require('../database/queries/selectMentors');

exports.get = (req, res, next) => {
  selectMentors((err, data) => {
    if (err) return next(err);
    return res.status(200).send({
      data: data.rows,
    });
  });
};
