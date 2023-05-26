const {Candidate} = require("../../model/Candidate");


const getAllCandidates = async (req, res) => {

  try {

    const candidates = await Candidate.find((err, candidates) => {
      if (err) {
        console.log(err);
        res.status(500).json(
          {
            error: err
          }
        )
      }
      else {
        console.log(candidates);
        res.status(200).json(
          {
            message: 'success',
            data: candidates
          }
        )
      }
    });
  } catch (err) {
    console.log(err);
  }

};

module.exports = getAllCandidates;