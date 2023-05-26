const {Job} = require("../../model/Company");


const getJobById = async (req, res) => {
  const uniqueID = req.params.id;
  console.log(uniqueID);


  try {

    const job = await Job.findById({ _id: uniqueID })
                          .populate('companyId','companyName');

    res.status(200).json({
      statusCode:1,
      message:'Success',
      data:job
    })

    
  } catch (err) {

    res.status(500).json({
      statusCode:0,
      message:err.message
    })

    console.log(err);
  }

};

module.exports = getJobById;