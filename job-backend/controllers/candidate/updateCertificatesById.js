const {Candidate} = require("../../model/Candidate");

const updateCertificate = async (req, res, next) => {
    const uniqueID = req.params.id
    console.log(uniqueID)
    try {
        const candidate = await Candidate.updateMany({ 'certificates._id': uniqueID },
            {
                $set: {
                    'certificates.$.certificateName': req.body.certificates.certificateName,
                    'certificates.$.issuedBy': req.body.certificates.issuedBy,
                    'certificates.$.issueDate': req.body.certificates.issueDate,
                    'certificates.$.credential': req.body.certificates.credential
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

module.exports = updateCertificate;