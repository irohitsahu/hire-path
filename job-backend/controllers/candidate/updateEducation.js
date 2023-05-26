const {Candidate} = require("../../model/Candidate");

const updateEducation = async (req, res, next) => {
    const uniqueID = req.params.id
    console.log(uniqueID)
    try {
        const candidate = await Candidate.updateMany({ 'education._id': uniqueID },
            {
                $set: {
                    'education.$.nameOfInstitute': req.body.education.nameOfInstitute,
                    'education.$.nameOfUniversity': req.body.education.nameOfUniversity,
                    'education.$.stream': req.body.education.stream,
                    'education.$.admissionYear': req.body.education.admissionYear,
                    'education.$.passingYear': req.body.education.passingYear,
                    'education.$.aggregate': req.body.education.aggregate
                    
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

module.exports = updateEducation;