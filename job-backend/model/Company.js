const mongoose = require('mongoose');

const Joi = require('joi')


const jobSchema = new mongoose.Schema({
    positionName: {
        type: String,
        // required: true
    },

    companyId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Company'
    },

    jobDescription: {
        type: String,
        // required: true
    },

    experienceNeeded: {
        type: Number,
        // required: true
    },
    typeOfJob: {
        type: String,
        enum: ["Full time", "Part time"]
    },

    modeOfJob: {
        type: String,
        enum: ["Remote", "Hybrid", "On site"]
    },

    responsibilities: {
        type: String,
        // required: true
    },

    requirement: {
        programmingLanguages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProgrammingLanguage'
            }
        ],
        tool: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Tool'
            }
        ],
        extras: {
            type: String
        },
        qualification: {
            type: String
        }
    }

})

const companySchema = new mongoose.Schema({

    companyName: {
        type: String,
        // required: true,
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    address: {
        state: {
            type: String,
            // required: true
        },

        city: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Location'
        },

        pinCode: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Location'
        },

        addressLine2: {
            type: String,
        },

        addressLine1: {
            type: String,
            // required: true
        }
    },

    headCount: {
        type: Number,
        // required: true
    },

    establishedYear: {
        type: Number,

    },

    aboutCompany: {
        type: String,
        // required: true
    },

    hrContactDetail: {
        mobileNo: {
            type: Number,
            // required: true
        },
        email: {
            type: String,
            // required: true
        }
    },

    jobPosting: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Job'
        }
    ]


})


companySchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id,isAdmin:this.isAdmin},process.env.JWT_PRIVATE_KEY);
    return token;
}

const validateRegister = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
});

const validateLogin = Joi.object({
    
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
});

const Company = mongoose.model('Company', companySchema);
const Job = mongoose.model('Job',jobSchema);

exports.Company = Company;
exports.Job = Job;
exports.validateRegister = validateRegister;
exports.validateLogin = validateLogin;

