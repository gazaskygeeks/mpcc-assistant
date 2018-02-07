const express = require('express');

const router = express.Router();
const getMentors = require('./getMentors');
const updateMentorField = require('./updateMentorField');
const getEmail = require('./getEmail');
const getSingleMentor = require('./getSingleMentor');

router.get('/', (req, res) => res.send({ app: 'A' }));
router.get('/get-mentors', getMentors);
router.get('/dashboard/mentor-panel/:mentorSelector/edit/:fieldType', updateMentorField);

router.get('/dashboard/mentor-panel/:mentorSelector', getSingleMentor);
router.get('/dashboard/mentor-panel/:mentorSelector/send-email/:emailType', getEmail);

module.exports = router;
