const fs = require('fs');
const path = require('path');
const connection = require('./dbConnection');

const buildScripts = fs.readFileSync(path.join(__dirname, 'build.sql')).toString();
const testsScripts = fs.readFileSync(path.join(__dirname, 'test.sql')).toString();

connection.query(buildScripts, (buildErr, buildRes) => {
  if (buildErr) return buildErr;
  console.log('Database have been built.');
  connection.query(testsScripts, (testsErr, testsRes) => {
    if(testsErr) return testsErr;
    console.log('Tests queries put.');
    connection.end();
  })
});
