const {Candidate} = require("../../model/Candidate");


const candidateById = async (req, res, next) => {
  const uniqueID = req.params.id;
  console.log(uniqueID);


  try {
    const candidates = await Candidate.findById({ _id: uniqueID }, (err, candidates) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
      else {
        console.log(candidates);
        res.status(200).json({
          message: "success",
          data: candidates,
        });
      }
    }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = candidateById;
