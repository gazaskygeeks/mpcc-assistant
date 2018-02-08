const { selectMentorsTest } = require('./database/selectMentors');
const { selectSingleMentorTest } = require('./database/selectSingleMentor');
const { insertSingleMentorTest } = require('./database/insertSingleMentor');
const { updateMentorQueryTest } = require('./database/updateMentor');
const { getMentorsTest } = require('./controllers/getMentors');
const { getSingleMentorTest } = require('./controllers/getSingleMentor');
const { getEmailTest } = require('./controllers/getEmail');
const { updateMentorTest } = require('./controllers/updateMentor');

selectMentorsTest();
getMentorsTest();
selectSingleMentorTest();
getSingleMentorTest();
getEmailTest();
insertSingleMentorTest();
updateMentorTest();
updateMentorQueryTest();
