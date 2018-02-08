const { selectMentorsTest } = require('./database/selectMentors');
const { getMentorsTest } = require('./controllers/getMentors');
const { selectSingleMentorTest } = require('./database/selectSingleMentor');
const { getSingleMentorTest } = require('./controllers/getSingleMentor');
const { getEmailTest } = require('./controllers/getEmail');
const { insertSingleMentorTest } = require('./database/insertSingleMentor')
const { updateMentorTest } = require('./controllers/updateMentor');
const { updateMentorQueryTest } = require('./database/updateMentor');

selectMentorsTest();
getMentorsTest();
selectSingleMentorTest();
getSingleMentorTest();
getEmailTest();
insertSingleMentorTest();
updateMentorTest();
updateMentorQueryTest();
