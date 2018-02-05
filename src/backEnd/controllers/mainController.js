const express = require('express');

const router = express.Router();
const getMentors = require('./getMentors');

router.get('/', (req, res) => res.send({ app: 'A' }));
router.get('/get-mentors', getMentors.get);

module.exports = router;
