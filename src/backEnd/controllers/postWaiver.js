const multer = require('multer');
const path = require('path');
const uuid = require('uuid');
const mime = require('mime');
const uploadFields = multer.diskStorage({
  destination: path.resolve('public', 'uploads'),
  fileFilter: (req, file, cb) => {
    cb(null, file.mimetype === 'application/pdf');
  },
  filename: (req, file, cb) => {
    const file_name = `${uuid()}.${mime.getExtension(file.mimetype)}`;
    cb(null,file_name);
  }

});
const uploading = multer({ storage: uploadFields }).single('file');

module.exports = uploading;
