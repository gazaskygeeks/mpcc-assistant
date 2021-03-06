const updateMentor = require('../database/queries/updateMentor');
const selectSingleMentor = require('../database/queries/selectSingleMentor');

module.exports = (req, res) => {
  const formattedBody = {
    formName: `${req.body.name} : ${req.body.title}`,
    entryDate: new Date().toString().slice(0, 24),
    nodes: req.body.nodes
      .map(node => {
        return ({
          [node.composed]:
        (node.value !== undefined ? node.value : 'NOT AVAIL'),
          required: (node.required !== undefined ? node.required : 'NOT AVAIL')
        });
      }).filter(node => {
        return Object.keys(node)[0] !== 'undefined' &&
      Object.keys(node)[0] !== 'null' &&
      Object.keys(node)[0] !== 'first_name' &&
      Object.keys(node)[0] !== 'surname' &&
      Object.keys(node)[0] !== 'email_address';
      }),
    mentorID: req.body.mentorID
  };
  selectSingleMentor(formattedBody.mentorID, (selectErr, selectRes) => {
    if (selectErr) throw new Error(selectErr);
    const singleMentor = selectRes.rows[0];
    const mentorObj = {
      id: singleMentor.id,
      email: singleMentor.email,
      last_name: singleMentor.last_name,
      first_name: singleMentor.first_name,
      current_stage: singleMentor.current_stage,
      date_of_arrival: singleMentor.date_of_arrival,
      date_of_departure: singleMentor.date_of_departure,
      info: singleMentor.info
    };
    const lastSavedInfo = { ...mentorObj.info };
    formattedBody.nodes.forEach(node => {
      mentorObj.info[Object.keys(node)[0]] = Object.values(node)[0];
    });
    mentorObj.info.lastSavedInfo = lastSavedInfo;
    updateMentor(mentorObj, (updateErr, updateRes) => {
      if (updateErr) throw new Error(updateErr);
      res.send(updateRes.rowCount === 1 ? 'MentorUpdated' : 'MentorNotFound');
    });
  });
};
