const {Candidate} = require("../../model/Candidate");

const updatePreviousEmployment = async (req, res, next) => {
    const uniqueID = req.params.id
    console.log(uniqueID)
    try {
        const candidate = await Candidate.updateMany({ _id: uniqueID },
            {
                $set: {
                    'previousEmployment.$[].nameOfCompany': req.body.previousEmployment.nameOfCompany,
                    'previousEmployment.$[].duration': req.body.previousEmployment.duration,

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

module.exports = updatePreviousEmployment;