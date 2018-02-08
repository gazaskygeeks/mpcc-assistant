const { selectMentorsTest } = require('./database/selectMentors');
const { getMentorsTest } = require('./controllers/getMentors');
const { selectSingleMentorTest } = require('./database/selectSingleMentor');
const { getSingleMentorTest } = require('./controllers/getSingleMentor');
const { getEmailTest } = require('./controllers/getEmail');
const { updateMentorTest } = require('./controllers/updateMentor');
const { updateMentorQueryTest } = require('./database/updateMentor');
const { selectUserTest } = require('./database/selectUserTest');
const { selectUser } = require('./controllers/selectUser');

selectMentorsTest();
getMentorsTest();
selectSingleMentorTest();
getSingleMentorTest();
getEmailTest();
updateMentorTest();
updateMentorQueryTest();
selectUserTest();
selectUser();
