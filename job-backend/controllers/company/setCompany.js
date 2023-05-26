const {Company} = require('../../model/Company')

const createCompany = async (req, res, next) => {

    /*const company = new Company({

        companyName: req.body.companyName,

        // address: {
        //     state: req.body.address.state,
        //     city: req.body.address.city,
        //     pinCode: req.body.address.pinCode,
        //     addressLine2: req.body.address.addressLine2,
        //     addressLine1: req.body.address.addressLine1

        // },

        headCount: req.body.headCount,

        establishedYear: req.body.establishedYear,

        aboutCompany: req.body.aboutCompany,

        hrContactDetail: {
            mobileNo: req.body.hrContactDetail.mobileNo,
            email: req.body.hrContactDetail.email
        }

    });*/

    try {
        // if(Company.find({}))
        const company = await Company.create(req.body);

        console.log(company);
        res.status(200).json({
            statusCode: 1,
            message: 'Success',
            data: company
        })
    } catch (err) {
        console.error('Some error occured');
        res.status(500).json({
            statusCode: 0,
            message: 'Failed',
        })
        console.error(err);
    }


};

module.exports = createCompany;