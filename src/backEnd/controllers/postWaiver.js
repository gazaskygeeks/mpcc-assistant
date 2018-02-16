const multer = require('multer');
const path = require('path');
const uuid = require('uuid');
const mime = require('mime');
const selectMentorByEmail = require('../database/queries/selectMentorByEmail');
const updateMentorField = require('../database/queries/updateMentor');

const uploadFields = multer.diskStorage({
  destination: path.resolve('public', 'uploads'),
  fileFilter: (req, file, cb) => {
    cb(null, file.mimetype === 'application/pdf');
  },
  filename: (req, file, cb) => {
    req.file_name = `${uuid()}.${mime.getExtension(file.mimetype)}`;
    cb(null,req.file_name);
  }
});
const uploading = multer({ storage: uploadFields }).single('file');

const pusher = (req, res, next) => {
  selectMentorByEmail(req.body.mentor_email, (selectErr, selectRes) => {
    if (selectErr) throw new Error(selectErr);
    if (selectRes.rows.length > 0) {
      const mentorData = selectRes.rows[0];
      mentorData.info.signed_waiver = `public/uploads/${req.file_name}`;
      updateMentorField(mentorData, (updateErr, updateRes) => {
        if (updateErr) throw new Error(updateErr);
        if (updateRes.rows.length > 0) {
          res.send({ msg: 'waiverSentSuccessfully' });
        }
      });
      next();
    } else res.send({ msg: 'emailNotFound' });
  });
};

module.exports = { uploading, pusher };
