const { ProgrammingLanguage, Language, Location, Tool, Stream } = require('../model/Preset')

exports.getAllProgrammingLanguage =async(req,res,next)=>{

    try {

        const programmingLanguages = await ProgrammingLanguage.find();
        console.log(programmingLanguages);


        res.status(200).json(
            {
                statusCode:1,
                data:programmingLanguages

            }
        );
    } catch (error) {
        console.log(error.message);
    }
}

exports.updateProgrammingLanguage = async(req,res,next)=>{


    let programmingLanguage = await ProgrammingLanguage.findOne({name:req.body.name});

    if(programmingLanguage){
        return res.status(400).json({
            statusCode:-1,
            message:'User already exists'
        })
    }

    programmingLanguage = new ProgrammingLanguage({
        name:req.body.name
    });

    try{
        const result = await programmingLanguage.save();

        res.status(200).json({
            statusCode:1,
            message:'saved successfully'
        })
    }catch(err){
        console.log(err);
    }


}



exports.getAllLanguage =async(req,res,next)=>{

    try {
        const languages = await Language.find();
        console.log(languages);

        res.status(200).json(
            {
                statusCode:1,
                data:languages
            }
        );
    } catch (error) {
        console.log(error.message);
    }
}




exports.updateLanguage = async(req,res,next)=>{

    let language = await Language.findOne({name:req.body.name});
    
    if(language){
        return res.status(400).json({
            statusCode:-1,
            message:'Language already exists'
        })
    }

    language = new Language({
        name:req.body.name
    });

    try{
        const result = await language.save();

        res.status(200).json({
            statusCode:1,
            message:'saved successfully',
            data:result
        })
    }catch(err){
        console.log(err);
    }

}


exports.getAllTools =async(req,res,next)=>{

    try {
        const tools = await Tool.find();
        console.log(tools);

        res.status(200).json(
            {
                statusCode:1,
                data:tools
            }
        );
    } catch (error) {
        console.log(error.message);
    }
}




exports.updateTools = async(req,res,next)=>{

    let tool = await Tool.findOne({name:req.body.name});
    
    if(tool){
        return res.status(400).json({
            statusCode:-1,
            message:'Language already exists'
        })
    }

    tool = new Tool({
        name:req.body.name
    });

    try{
        const result = await tool.save();

        res.status(200).json({
            statusCode:1,
            message:'saved successfully',
            data:result
        })
    }catch(err){
        console.log(err);
    }

}

exports.getAllLocations =async(req,res,next)=>{

    try {
        const locations = await Preset.find().select({location:1,_id:0});
        console.log(locations);

        res.status(200).json(
            {
                statusCode:1,
                data:locations
            }
        );
    } catch (error) {
        console.log(error.message);
    }
}




exports.updateLocation = async(req,res,next)=>{

    const location = req.body.location;
    console.log(location);

    try {
        const locations = await Preset.updateOne({},{$push:{location:location}});
        console.log(locations);
        res.status(200).json({
            statusCode : 1,
            data:locations
        })
                
    } catch (error) {
        console.log(error);
    }

}


exports.getAllStreams =async(req,res,next)=>{

    try {
        const streams = await Stream.find();
        console.log(streams);

        res.status(200).json(
            {
                statusCode:1,
                data:streams
            }
        );
    } catch (error) {
        console.log(error.message);
    }
}




exports.updateStream = async(req,res,next)=>{

    let stream = await Stream.findOne({name:req.body.name});
    
    if(stream){
        return res.status(400).json({
            statusCode:-1,
            message:'Stream already exists'
        })
    }

    stream = new Stream({
        name:req.body.name
    });

    try{
        const result = await stream.save();

        res.status(200).json({
            statusCode:1,
            message:'saved successfully',
            data:result
        })
    }catch(err){
        console.log(err);
    }

}









exports.setPreset = async(req,res,next)=>{

    const data = req.body;

    try {
        const programmingLang = await Preset.create(data);
        console.log(data);
        res.status(200).json({
            statusCode : 1,
            data:data
        })
                
    } catch (error) {
        console.log(error);
    }

}