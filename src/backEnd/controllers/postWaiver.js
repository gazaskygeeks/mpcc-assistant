// const fs = require('fs');
// // const path = require('path');
// module.exports = (req, res, next) => {
//   const ws = fs.createWriteStream('something.pdf');
//   console.log(' recieved!!!!');
//   console.log('uploaded');
//   ws.write(req.body);
//   ws.end();
//   next();
// };

const multer = require('multer');
const path = require('path');
const uuid = require('uuid');
const mime = require('mime');
const uploadFields = multer.diskStorage({
  destination: path.resolve('public', 'uploads'),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf')
      cb(null, true);
    else
      cb(null, false);
  },
  filename: (req, file, cb) => {
    const file_name = `${uuid()}.${mime.getExtension(file.mimetype)}`;
    // req.body.file_name = file_name;
    // req.body.original_name = file.originalname;
    cb(null,file_name);
  }

});
const uploading = multer({ storage: uploadFields }).single('file');
const uploadFile = (req, res) => {
  // uploading(req, res, (response, err) => {
  //   if (err)
  //     return res.status(500).json({ msg: 'error uploading the file' });
  //   const { file_name, original_name, project_name, ip, country } = req.body;
  // });
};

module.exports = { uploadFile,uploading };
