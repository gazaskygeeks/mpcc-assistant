// GET tests (Controller)
require('./controllers/getEmail')();
require('./controllers/getMentors')();
require('./controllers/getSingleMentor')();
// POST tests (Controller)
require('./controllers/postLogin')();
require('./controllers/postDocStatus')();
require('./controllers/postFlightInfo')();
require('./controllers/updateMentor')();
require('./controllers/postPermitApproval')();
// SELECT tests (DB)
require('./database/selectMentors')();
require('./database/selectUserTest')();
require('./database/selectSingleMentor')();
require('./database/selectMentorByEmail')();
// UPDATE tests (DB)
require('./database/updateMentor')();
// INSERT tests (DB)
require('./database/insertSingleMentor')();
