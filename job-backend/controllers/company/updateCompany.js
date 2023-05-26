const {Company,Job} = require('../../model/Company')

const updateCompany = async (req, res, next) => {
    const companyId = req.params.id;
    console.log(companyId);
    const updateData = req.body;
    let updateobject = {};

    try {

        if (req.body.hasOwnProperty("companyName")) {
            updateobject.companyName = req.body.companyName;
        }

        if (req.body.hasOwnProperty("address")) {
            updateobject.companyName = req.body.address;
        }

        if (req.body.hasOwnProperty("headCount")) {
            updateobject.headCount = req.body.headCount;
        }

        if (req.body.hasOwnProperty("hrContactDetail")) {
            updateobject.hrContactDetail = req.body.hrContactDetail;
        }

        await Company.findOneAndUpdate({ _id: companyId }, { $set: updateobject },
            { new: true, useFindAndModify: false });

        console.log(updateData);
        res.status(200).json({
            statuscode: 1,
            message: "Updated",
            data: updateobject
        })
    }

    catch (err) {
        console.error('Some error occured');
        res.status(500).json({
            statusCode: 0,
            message: 'Failed'
        })
        console.error(err);
    }

}

module.exports = updateCompany;