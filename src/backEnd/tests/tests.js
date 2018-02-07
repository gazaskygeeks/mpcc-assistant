const { selectMentorsTest } = require('./database/selectMentors');
const { getMentorsTest } = require('./controllers/getMentors');
const { selectSingleMentorTest } = require('./database/selectSingleMentor');
const { getSingleMentorTest } = require('./controllers/getSingleMentor');
const { getEmailTest } = require('./controllers/getEmail');

selectMentorsTest();
getMentorsTest();
selectSingleMentorTest();
getSingleMentorTest();
getEmailTest();
