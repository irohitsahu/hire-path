const {Candidate} = require("../../model/Candidate");

const updateJobPrefrence = async (req, res, next) => {
    const uniqueID = req.params.id
    console.log(uniqueID)
    try {
        const candidate = await Candidate.updateMany({ _id: uniqueID },
            {
                $set: {
                    'jobPreference.location': req.body.jobPreference.location,
                    'jobPreference.modeOfJob': req.body.jobPreference.modeOfJob
                }
            },
            { new: true, useFindAndModify: false, upsert: true }
        );

        console.log(candidate);
        res.status(200).json({
            statusCode: 1,
            message: 'Updated',
            data: candidate
        })
    }
    catch (err) {
        console.error('Some error occured');
        res.status(500).json({
            statusCode: 0,
            message: 'Failed',
        })
        console.error(err);
    }
}

module.exports = updateJobPrefrence;
