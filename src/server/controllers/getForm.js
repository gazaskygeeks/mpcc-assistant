const selectForm = require('../database/queries/selectForm');

module.exports = (req, res, next) => {
  selectForm(req.params.formID, (err, dbRes) => {
    if (err) return next(err);
    return res.status(200).send({
      form: dbRes.rows
    });
  });
};
