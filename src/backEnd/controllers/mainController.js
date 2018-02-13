const express = require('express');

const router = express.Router();
const getEmail = require('./getEmail');
const postLogin = require('./postLogin');
const getMentors = require('./getMentors');
const postDocStatus = require('./postDocStatus');
const postHostMentor = require('./postHostMentor');
const getSingleMentor = require('./getSingleMentor');
const postUpdateMentorField = require('./postUpdateMentorField');
const postFlightInfo = require('./postFlightInfo');

router.get('/', (req, res) => res.send({ app: 'A' }));
router.get('/get-mentors', getMentors);
router.get('/dashboard/mentor-panel/:mentorSelector', getSingleMentor);
router.get('/dashboard/mentor-panel/:mentorSelector/check/:docType', postDocStatus);
router.get('/dashboard/mentor-panel/:mentorSelector/send-email/:emailType', getEmail);
router.post('/submit/flight-info/confirm', postFlightInfo);
router.post('/dashboard/mentor-panel/:mentorSelector/edit/:fieldType', postUpdateMentorField);
router.post('/dashboard/host-mentor', postHostMentor);

router.post('/login', postLogin);

module.exports = router;
