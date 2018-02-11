const { selectMentorsTest } = require('./database/selectMentors');
const { getMentorsTest } = require('./controllers/getMentors');
const { selectSingleMentorTest } = require('./database/selectSingleMentor');
const { getSingleMentorTest } = require('./controllers/getSingleMentor');
const { getEmailTest } = require('./controllers/getEmail');
const { selectUserTest } = require('./database/selectUserTest');
const { postLogin } = require('./controllers/postLogin');
const { updateMentorTest } = require('./controllers/updateMentor');
const { postDocStatusTest } = require('./controllers/postDocStatus');

selectMentorsTest();
getMentorsTest();
selectSingleMentorTest();
getSingleMentorTest();
getEmailTest();
selectUserTest();
postLogin();
updateMentorTest();
postDocStatusTest();
