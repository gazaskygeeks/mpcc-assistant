const express = require('express');

const router = express.Router();
const getEmails = require('./getEmails');
const postEmail = require('./postEmail');
const postLogin = require('./postLogin');
const getMentors = require('./getMentors');
const postDocStatus = require('./postDocStatus');
const { uploading, pusher } = require('./postWaiver');
const postHostMentor = require('./postHostMentor');
const getSingleMentor = require('./getSingleMentor');
const postUpdateMentorField = require('./postUpdateMentorField');
const postFlightInfo = require('./postFlightInfo');
const postPermitApproval = require('./postPermitApproval');

router.get('/get-mentors', getMentors);
router.get('/dashboard/mentor-panel/get-emails', getEmails);
router.get('/dashboard/mentor-panel/:mentorSelector', getSingleMentor);
router.post('/dashboard/mentor-panel/:mentorSelector/check/:docType', postDocStatus);
router.post('/submit/signed-waiver/confirm', uploading, pusher);
router.post('/submit/flight-info/confirm', postFlightInfo);
router.post('/dashboard/mentor-panel/:mentorSelector/sendEmail/:emailType/confirm', postEmail);
router.post('/dashboard/mentor-panel/:mentorSelector/edit/:fieldType', postUpdateMentorField);
router.post('/dashboard/host-mentor', postHostMentor);
router.post('/dashboard/mc/permit-approval/:mentorID', postPermitApproval);
router.post('/login', postLogin);

module.exports = router;
