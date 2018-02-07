const updateMentor = require('../database/queries/updateMentor');
const selectSingleMentor = require('../database/queries/selectSingleMentor');

module.exports = (req, res, next) => {
  const mentorId = req.params.mentorSelector.split('-')[2];
  const docType = req.params.docType;
  selectSingleMentor(mentorId, (err, data) => {
    if (err) return next(err);
    const mentorData = data.rows[0];
    const info = JSON.parse(mentorData.info);
    switch (docType) {
      case 'singned_waver':
        info.singned_waver = !info.singned_waver;
        break;
      case 'flight_information':
        info.flight_information = !info.flight_information;
        break;
      case 'book_hotel':
        info.book_hotel = !info.book_hotel;
        break;
      case 'transfere_schedule':
        info.transfere_schedule = !info.transfere_schedule;
        break;
      case 'whatsap_group':
        info.whatsap_group = !info.whatsap_group;
        break;
      case 'share_final_files':
        info.share_final_files = !info.share_final_files;
        break;
      default: return null;
    }
    mentorData.info = JSON.stringify(info);
    updateMentor(mentorData, (error, result) => {
      if (error) return next(error);

      return res.send({ msg: 'STATUS_UPDATED' });
    });
  });
};
