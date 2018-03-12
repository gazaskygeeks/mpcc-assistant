const fs = require('fs');
const path = require('path');
const connection = require('./dbConnection');

const buildScripts = fs.readFileSync(path.join(__dirname, 'build.sql')).toString();
const testsScripts = fs.readFileSync(path.join(__dirname, 'test.sql')).toString();

connection.query(buildScripts, buildErr => {
  if (buildErr) return console.log(buildErr); ;
  console.log('Database have been built.');
  connection.query(testsScripts, testsErr => {
    if (testsErr) return console.log(testsErr);
    console.log('Tests queries put.');
    connection.end();
  });
});
