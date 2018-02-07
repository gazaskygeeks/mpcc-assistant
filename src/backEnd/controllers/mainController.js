const express = require('express');

const router = express.Router();
const getMentors = require('./getMentors');
const hostMentor = require('./hostMentor');

router.get('/', (req, res) => res.send({ app: 'A' }));
router.get('/get-mentors', getMentors);
// Expect { name, lname, email, dateofarrival, existing? } =>
router.post('/dashboard/host-mentor', hostMentor);

module.exports = router;
