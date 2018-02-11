const express = require('express');

const router = express.Router();
const getEmail = require('./getEmail');
const postEmail = require('./postEmail');
const postLogin = require('./postLogin');
const getMentors = require('./getMentors');
const postDocStatus = require('./postDocStatus');
const getSingleMentor = require('./getSingleMentor');
const updateMentorField = require('./updateMentorField');

router.get('/', (req, res) => res.send({ app: 'A' }));
router.get('/get-mentors', getMentors);
router.get('/dashboard/mentor-panel/:mentorSelector', getSingleMentor);
router.get('/dashboard/mentor-panel/:mentorSelector/check/:docType', postDocStatus);
router.get('/dashboard/mentor-panel/:mentorSelector/send-email/:emailType', getEmail);
router.post('/dashboard/mentor-panel/:mentorSelector/edit/:fieldType', updateMentorField);
router.post('/dashboard/mentor-panel/:mentorSelector/sendEmail/:emailType/confirm', postEmail);
router.post('/login', postLogin);

module.exports = router;
