const multer = require('multer');
const path = require('path');
const uuid = require('uuid');
const mime = require('mime');
const selectMentorByEmail = require('../database/queries/selectMentorByEmail');
const updateMentorField = require('../database/queries/updateMentor');

const uploadFields = multer.diskStorage({
  destination: path.resolve('public', 'uploads'),
  fileFilter: (req, file, cb) => {
    console.log('eaaaaaaaaaaaaa');
    cb(null, file.mimetype === 'application/pdf');
  },
  filename: (req, file, cb) => {
    req.file_name = `${uuid()}.${mime.getExtension(file.mimetype)}`;
    console.log('sssssssssssssssddd');
    console.log('req.filename', req.file_name);
    cb(null,req.file_name);
  }
});
const uploading = multer({ storage: uploadFields }).single('file');

const pusher = (req, res, next) => {
  selectMentorByEmail(req.body.email, (selectErr, selectRes) => {
    if (selectErr) throw new Error(selectErr);
    if (selectRes) {
      const mentorData = selectRes.rows[0];
      // console.log(mentorData);
      mentorData.info.waiver_name = req.file_name;
      console.log('filename: ', req.file_name);
      updateMentorField(mentorData, (updateErr, updateRes) => {
        if (updateErr) throw new Error(updateErr);
        console.log(updateRes);
      });
      next();
    } else res.send({ msg: 'emailNotFound' });
  });
};

module.exports = { uploading, pusher };
