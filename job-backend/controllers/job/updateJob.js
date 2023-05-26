const {Job} = require("../../model/Company");

const setJobById = async (req, res, next) => {
    const uniqueID = req.params.id;
    console.log(uniqueID);
    try {
        const job = await Job.updateMany(
            { _id: uniqueID },
            {
                $set: {
                    jobPosting: [
                        {
                            positionName: req.body.jobPosting.positionName,
                            jobDescription: req.body.jobPosting.jobDescription,
                            experienceNeeded: req.body.jobPosting.experienceNeeded,
                            typeOfJob: req.body.jobPosting.typeOfJob,
                            modeOfJob: req.body.jobPosting, modeOfJob,
                            responsibilities: req.body.jobPosting.responsibilities,
                            // requirement: {
                            //     programmingLanguages: [
                            //         {
                            //             type: mongoose.Schema.Types.ObjectId,
                            //             ref: 'Preset'
                            //         }
                            //     ],
                            //     tool: [
                            //         {
                            //             type: mongoose.Schema.Types.ObjectId,
                            //             ref: 'Preset'
                            //         }
                            //     ],
                            //     extras: {},
                            //     qualification: {}
                            // },

                            lastDateOfApply: req.body.jobPosting.lastDateOfApply



                        }

                    ]
                },
            },

            { new: true, useFindAndModify: false }
        );

        console.log(job);
        res.status(200).json({
            statusCode: 1,
            message: "Updated",
            data: job,
        });
    }

    catch (err) {
        console.error("Some error occured");
        res.status(500).json({
            statusCode: 0,
            message: "Failed",
        });
        console.error(err);
    }
};

module.exports = setJobById;