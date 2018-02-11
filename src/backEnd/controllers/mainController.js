const express = require('express');

const router = express.Router();
const getMentors = require('./getMentors');
const postHostMentor = require('./postHostMentor');
const postUpdateMentorField = require('./postUpdateMentorField');
const getEmail = require('./getEmail');
const getSingleMentor = require('./getSingleMentor');
const postLogin = require('./postLogin');
const postDocStatus = require('./postDocStatus');

router.get('/', (req, res) => res.send({ app: 'A' }));
router.get('/get-mentors', getMentors);
router.post('/dashboard/host-mentor', postHostMentor);
router.post('/dashboard/mentor-panel/:mentorSelector/edit/:fieldType', postUpdateMentorField);
router.get('/dashboard/mentor-panel/:mentorSelector', getSingleMentor);
router.post('/dashboard/mentor-panel/:mentorSelector/edit/:fieldType', updateMentorField);
router.get('/dashboard/mentor-panel/:mentorSelector/check/:docType', postDocStatus);
router.get('/dashboard/mentor-panel/:mentorSelector/send-email/:emailType', getEmail);
router.post('/login', postLogin);

module.exports = router;
