const {Company,Job} = require('../../model/Company')
const companyById = async (req, res, next) => {
    const uniqueID = req.params.id
    console.log(uniqueID)
    try {

        const company = await Company.findById({ _id: uniqueID })
                        .populate('jobId');

        res.status(200).json({
            statusCode:1,
            message:'Success',
            data:company
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            statusCode:0,
            message:err.message
        })
    }

};

module.exports = companyById;