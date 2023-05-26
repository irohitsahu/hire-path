const {Company} = require('../../model/Company')

const getCompanyDetails = async (req, res) => {

    try {

        const company = await Company.find((err, company) => {
            if (err) {
                console.log(err);
                res.status(500).json(
                    {
                        error: err
                    }
                )
            }
            else {
                console.log(company);
                res.status(200).json(
                    {
                        message: 'success',
                        data: company
                    }
                )
            }
        });
    } catch (err) {
        console.log(err);
    }

};

module.exports = getCompanyDetails;