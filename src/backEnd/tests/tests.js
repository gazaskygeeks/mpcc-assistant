const { selectMentorsTest } = require('./database/selectMentors');
const { getMentorsTest } = require('./controllers/getMentors');
const { selectSingleMentorTest } = require('./database/selectSingleMentor');
const { getSingleMentorTest } = require('./controllers/getSingleMentor');
const { getEmailTest } = require('./controllers/getEmail');
const { updateMentorQueryTest } = require('./database/updateMentor');
const { updateMentorTest } = require('./controllers/updateMentor');
const { postDocStatusTest } = require('./controllers/postDocStatus');

selectMentorsTest();
getMentorsTest();
selectSingleMentorTest();
getSingleMentorTest();
getEmailTest();
updateMentorQueryTest();
updateMentorTest();
postDocStatusTest();
