const {Company} = require("../../model/Company");

const insertJobById = async (companyId,jobId) => {
    const uniqueID = companyId;
    console.log(uniqueID);
    console.log(jobId);

    try {
        const job = await Company.updateOne(
            { _id: uniqueID },
            {
                $push: {
                    jobPosting: jobId
                }
            },

            { new: true, useFindAndModify: false }
        );

        
    }

    catch (err) {
        console.error(err);
    }
};

module.exports = insertJobById;