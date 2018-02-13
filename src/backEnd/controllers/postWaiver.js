const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
module.exports = (req, res, next) => {
  console.log('fiiiiiiiile', req.file);
  const form = new formidable.IncomingForm();
  console.log(req.body);
  form.parse(req, (err, fields, files) => {
    const oldpath = files.filetoupload.path;
    const newpath = path.join(__dirname, files.filetoupload.name);
    fs.rename(oldpath, newpath, renameErr => {
      if (renameErr) throw renameErr;
      res.write('File uploaded and moved!');
      console.log('File uploaded and moved!');
      res.end();
    });
    console.log('ok so far');
    if (err) throw new Error(err);
  });
  next();
};
