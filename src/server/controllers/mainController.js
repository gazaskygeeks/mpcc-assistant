const express = require('express');

const router = express.Router();
const getEmails = require('./getEmails');
const postEmail = require('./postEmail');
const postLogin = require('./postLogin');
const getMentors = require('./getMentors');
const getNotifications = require('./getNotifications');
const postDocStatus = require('./postDocStatus');
const { uploading, pusher } = require('./postWaiver');
const postHostMentor = require('./postHostMentor');
const getSingleMentor = require('./getSingleMentor');
const postUpdateMentorField = require('./postUpdateMentorField');
const postFlightInfo = require('./postFlightInfo');
const putNotification = require('./putNotification');
const getForm = require('./getForm');
const postForm = require('./postForm');
const postPermitApproval = require('./postPermitApproval');
const postPermissionApproval = require('./postPermissionApproval');

router.get('/get-mentors', getMentors);
router.get('/dashboard/ms/get/form/:formID', getForm);
router.get('/dashboard/mentor-panel/get-emails', getEmails);
router.get('/dashboard/mentor-panel/:mentorSelector', getSingleMentor);
router.get('/dashboard/api-notifications', getNotifications);
router.post('/dashboard/mentor-panel/:mentorSelector/check/:docType', postDocStatus);
router.post('/dashboard/mentor-panel/:mentorSelector/sendEmail/:emailType/confirm', postEmail);
router.post('/dashboard/mentor-panel/:mentorSelector/edit/:fieldType', postUpdateMentorField);
router.post('/dashboard/host-mentor', postHostMentor);
router.post('/dashboard/ms/post/form/:formID', postForm);
router.post('/submit/signed-waiver/confirm', uploading, pusher);
router.post('/submit/flight-info/confirm', postFlightInfo);
router.post('/dashboard/mc/permit-approval/:mentorID', postPermitApproval);
router.post('/dashboard/mc/permission-approval/:mentorID', postPermissionApproval);
router.post('/login', postLogin);
router.put('/dashboard/notification/:id/', putNotification);

module.exports = router;
