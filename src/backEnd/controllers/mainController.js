const express = require('express');

const router = express.Router();

const getEmail = require('./getEmail');
const getSingleMentor = require('./getSingleMentor');
const postEmail = require('./postEmail');
const updateMentorField = require('./updateMentorField');
const postDocStatus = require('./postDocStatus');

router.get('/', (req, res) => res.send({ app: 'A' }));

router.get('/dashboard/mentor-panel/:mentorSelector', getSingleMentor);
router.get('/dashboard/mentor-panel/:mentorSelector/sendEmail/:someEmail', getEmail);
router.post('/dashboard/mentor-panel/:mentorSelector/sendEmail/:someEmail/confirm', postEmail);
router.post('/dashboard/mentor-panel/:mentorSelector/edit/:someField', updateMentorField);
router.post('/dashboard/mentor-panel/:mentorSelector/check/:someDocument', postDocStatus);

module.exports = router;
