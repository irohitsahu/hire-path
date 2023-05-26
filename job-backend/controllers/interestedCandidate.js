const InteresetedCandidate = require('../model/InteresetedCandidate')


// end point /api/interestedcandidate/
// POST Request
/*
 body

    {
        "jobId":
        "candidateId":
    }

*/
exports.addCandidateToInterested = async(req,res,next) => {

    console.log("In the addCandidate function");
    const jobId = req.body.jobId;
    const candidateId = req.body.candidateId;

    console.log("job id is"+ jobId);
    console.log("candidate id is"+ candidateId);
    

    try{

        const result = await addCandidateToDatabase(jobId,candidateId);
        res.status(200).json({
            statusCode: 1,
            message: "Success",
            data: result

        })
    }
    catch(err){
        console.error("Some error occured");
        res.status(500).json({
          statusCode: 0,
          message: "Failed",
        });
        console.error(err);
    }



}

exports.test = (req,res,next)=>{
    res.status(200).json({
        says:"Hello"
    })
}



// end point /api/interestedcandidate/:jobId
// GET Request
exports.getInterestedCandidate = async(req,res,next)=>{
    const jobId = req.params.jobId;
    try{
        const result = await InteresetedCandidate
                        .find({jobId:jobId})
                        .populate('jobId').exec();

        res.status(200).json({
            statusCode:1,
            message: 'Success',
            data: result
        })
    }catch(err){

        console.log(err);

        res.status(500).json({
            statusCode: 0,
            message: 'Some error occured',
            error: err
        })
    }
 

}


const addCandidateToDatabase = async(jobId,candidateId) =>{
    
    const job = await InteresetedCandidate.find({jobId:jobId});

    console.log('job is ' + job);
    console.log(job.length);

    if(job.length != 0){
        console.log("in if block")
        
        const result = await InteresetedCandidate.updateOne({jobId:jobId},
                {
                    $push:{
                        interestedCandidates:{
                            candId:candidateId
                        }
                    }
                },
                {new : true}
                
        )

        return result;

    }else{
        console.log("in else block")
        const interestedcandidate = new InteresetedCandidate({
            jobId: jobId,
            interestedCandidates:{
                candId: candidateId
            }
        })
        const result = await interestedcandidate.save();
        return result;
    }
    

}