const{Job} =  require('../../model/Company')
const insertJobById = require('../job/insertJobById')


const setJob = async(req,res,next) =>{

    try {

        const{postionName, 
            jobDescription,
            experienceNeeded,
            typeOfJob,
            modeOfJob,
            responsibilities,
            requirement
        } = req.body;
    
        const companyId = req.params.companyId;
        console.log(companyId);
    
        const job = new Job({
            companyId : companyId,
            positionName:postionName,
            jobDescription:jobDescription,
            experienceNeeded:experienceNeeded,
            typeOfJob:typeOfJob,
            modeOfJob:modeOfJob,
            responsibilities:responsibilities,
            requirement: requirement
            
        })

        const result = await job.save();

        await insertJobById(companyId,result._id);

        res.status(200).json({
            statusCode:1,
            message:'Success',
            data:result
        })
    } catch (error) {
        console.log(error);

        res.status(500).json({
            statusCode:0,
            message:error.message
        })
    }

}

module.exports = setJob
