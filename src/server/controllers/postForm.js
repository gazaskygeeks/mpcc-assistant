const insertMentorSubmission = require('../database/queries/insertMentorSubmission');

module.exports = (req, res, next) => {
  const formattedBody = {
    formName: `${req.body.name} : ${req.body.title}`,
    entryDate: new Date().toString().slice(0, 24),
    nodes: req.body.nodes.map(node => {
      return ({
        fieldName: (node.title !== undefined ? node.title : 'NOT AVAIL'),
        fieldValue: (node.value !== undefined ? node.value : 'NOT AVAIL'),
        fieldRequired: (node.required !== undefined ? node.required : 'NOT AVAIL')
      });
    })
  };
  req.body = formattedBody;
  req.body.mentorEmail = req.body.nodes
    .filter(node => node
      .fieldName.toLowerCase().trim().startsWith('email'))[0].fieldValue;
  insertMentorSubmission(req.body, (err, insertMentorRes) => {
    console.log('insertMentorSubmission RES', err);
    console.log('insertMentorSubmission RES', insertMentorRes);
  });
  res.send('Request reached server');
};
