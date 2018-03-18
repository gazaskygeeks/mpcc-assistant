const fs = require('fs');
const path = require('path');
const connection = require('./dbConnection');
const insertForms = require('./queries/insertForms');

const buildScripts = fs.readFileSync(path.join(__dirname, 'build.sql')).toString();
const testsScripts = fs.readFileSync(path.join(__dirname, 'test.sql')).toString();

connection.query(buildScripts, buildErr => {
  if (buildErr) return console.log(buildErr);
  console.log('\x1b[36m%s\x1b[0m', 'Database have been built.');
  connection.query(testsScripts, testsErr => {
    if (testsErr) return console.log(testsErr);
    console.log('\x1b[36m%s\x1b[0m', 'Tests queries put.');
    connection.end();
  });
});

insertForms(err => {
  if (err) throw new Error(err);
  console.log('\x1b[36m%s\x1b[0m', 'Database initialized with forms.');
});
