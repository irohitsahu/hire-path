const {Candidate} = require("../../model/Candidate");

const createCandidate = async (req, res, next) => {
  try {
    // if(Candidate.find({}))
    const candidate = await Candidate.create(req.body);

    console.log(candidate);
    res.status(200).json({
      statusCode: 1,
      message: "Success",
      data: candidate,
    });
  } catch (err) {
    console.error("Some error occured");
    res.status(500).json({
      statusCode: 0,
      message: "Failed",
    });
    console.error(err);
  }
};

module.exports = createCandidate;
