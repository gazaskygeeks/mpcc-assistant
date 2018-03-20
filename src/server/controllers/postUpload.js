const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
// const multer = require('multer');
// const path = require('path');
// const uuid = require('uuid');
// const mime = require('mime');
const selectMentorByEmail = require('../database/queries/selectMentorByEmail');
const updateMentorField = require('../database/queries/updateMentor');

// const uploadFields = multer.diskStorage({
//   destination: path.resolve('public', 'uploads'),
//   fileFilter: (req, file, cb) => {
//     console.log('myfile', file);
//     cb(null, file.mimetype === 'application/pdf' || file.mimetype === 'image/*');
//   },
//   filename: (req, file, cb) => {
//     console.log('fileeeeeee', file);
//     req.file_name = req.url === '/submit/offer-picture/confirm' ?
//       `photo_${req.body.mentor_email.split('@')[0].replace('/\./g', '-')}
//       .${mime.getExtension(file.mimetype)}` :
//       `${uuid()}.${mime.getExtension(file.mimetype)}`;
//     cb(null,req.file_name);
//   }
// });
// const uploading = multer({ storage: uploadFields }).single('file');

module.exports = (req, res, next) => {
  console.log('i think that im ok');
  console.log('req.body', req.body);
  const form = new formidable.IncomingForm();
  console.log('form', form);
  form.parse(req, (err, fields, files) => {
    console.log('fields', fields);
    if (err) throw err;
    console.log('files', files);
    const oldpath = files.personalPicture.path;
    const newpath =
    path.join(__dirname, '..', '..', '..', 'public', 'uploads', files.personalPicture.name);
    fs.rename(oldpath, newpath, fserr => {
      if (fserr) throw fserr;
      console.log('imaliiiiiiiiiiiiiiiiiiiiive!!!');
      res.write('File uploaded and moved!');
      res.end();
    });
  });
  selectMentorByEmail(req.body.mentor_email, (selectErr, selectRes) => {
    if (selectErr) return next(new Error(selectErr));
    console.log('reeeeeees::::::', selectRes.rows);
    if (selectRes.rowCount > 0) {
      // uploading();
      const mentorData = selectRes.rows[0];
      mentorData.info.signed_waiver = `public/uploads/${req.file_name}`;
      updateMentorField(mentorData, (updateErr, updateRes) => {
        if (updateErr) return next(new Error(updateErr));
        if (updateRes.rows.length > 0) {
          const msg = req.url === '/submit/signed-waiver/confirm' ?
            'waiverSentSuccessfully' : 'pictureSentSuccessfully';
          res.send({ msg });
        }
      });
    } else res.send({ msg: 'emailNotFound' });
  });
};
