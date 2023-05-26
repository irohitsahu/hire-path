const {Candidate} = require("../../model/Candidate");


const updateSkillTest = async (req, res, next) => {
    const uniqueID = req.params.id
    const updatedSkills = req.body.updatedSkills

    const queryObject = {
        $set: {
            // 'skills.programmingLanguages': updatedSkills.programmingLanguages
        }
    }


    const modifyQueryString = (updatedSkills) => {
        if (updatedSkills.hasOwnProperty("programmingLanguages")) {
            queryObject.$set = { 'skills.programmingLanguages': updatedSkills.programmingLanguages }
            return
        } else if (updatedSkills.hasOwnProperty("languages")) {
            queryObject.$set = { 'skills.languages': updatedSkills.languages }
            return
        } else if (updatedSkills.hasOwnProperty("tools")) {
            queryObject.$set = { 'skills.tools': updatedSkills.tools }
            return
        }
    }

    modifyQueryString(updatedSkills);



    console.log(uniqueID)
    try {
        const updateSkill = await Candidate.updateOne(
            { _id: uniqueID },
            queryObject,
            {
                new: true, useFindAndModify: true, upsert: true
            }
        )

        console.log(updateSkill);
        res.status(200).json({
            statusCode: 1,
            message: 'Updated',
            data: updateSkill
        })
    }
    catch (err) {
        console.log(err.message)
    }
}



module.exports = updateSkillTest;
