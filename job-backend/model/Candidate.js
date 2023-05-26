const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const { ProgrammingLanguage, Language, Location, Tool, Stream } = require('./Preset');


const Joi = require('joi');


const candidateSchema = new mongoose.Schema({

    test: String,

    email: {
        type: String,
        unique: true,
        //required: true

    },

    isAdmin:{
        type: Boolean,
        default:false
    },

    password: {
        type: String,
        unique: true,
    },

    name: {
        type: String,
        //require: true,
    },

    basicDetail: {

        dateOfBirth: {
            type: Date,
            //required: true,
        },

        address: {
            type: String,

        },

        gender: { 
            type: String,
            enum: {
                values: ['Male', 'Female', 'Other'],
                message: '{VALUE} is not supported'
            }

        },

        mobileNo: {
            type: Number,
            min: [1000000000, "Mobile no. must have 10 digits"],
            // unique: true,
            //required: true
        },


        bio: {
            type: String,

        }
    },

    education: [{
        nameOfInstitute: {
            type: String,
            //required: true,

        },

        nameOfUniversity: {
            type: String,
            //required: true,

        },


        stream: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Stream'
        },

        admissionYear: {
            type: Date,
            //required: true,

        },

        passingYear: {
            type: Date,
            //required: true,

        },

        aggregate: {
            type: Number,
            //required: true
        },


    }
    ],

    skills: {


        languages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Language'

            }
        ],

        programmingLanguages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProgrammingLanguage'
            }
        ],

        tools: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Tool'
            }
        ]


    },

    previousEmployement: [
        {
            nameOfCompany: {
                type: String
            },

            duration: {
                type: Number
            }
        }
    ],

    certificates: [
        {
            certificateName: {
                type: String
            },

            issuedBy: {
                type: String,
            },

            issueDate: {
                type: Date,

            },

            credential: {
                type: String,
                //required: true
            }
        }
    ],

    jobPreference: {
        location: [
            {
                type: String,
            }
        ],

        modeOfJob: {
            type: String,
            enum: {
                values: ['Work from home', 'On site', 'Hybrid'],
                message: '{VALUE} is not supported'
            }

        }
    }


});

    candidateSchema.methods.generateAuthToken = function(){
        const token = jwt.sign({_id:this._id,isAdmin:this.isAdmin},process.env.JWT_PRIVATE_KEY);
        return token;
    }

//     jobPreference: [{

//             location: 
//             {
//                 type: String,
//             }
//         ,

//         modeOfJob: {
//             type: String,
//             enum: {
//                 values: ['Work from home', 'On site', 'Hybrid'],
//                 message: '{VALUE} is not supported'
//             }

//         }
//     }]


// });


const validateRegister = Joi.object({
    name:Joi.string().min(2).max(100).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
});

const validateLogin = Joi.object({
    
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
});




const Candidate = mongoose.model('Candidate', candidateSchema);


exports.Candidate = Candidate;
exports.validateRegister = validateRegister;
exports.validateLogin = validateLogin;
