const express = require("express");
const routerInterested = express.Router();

const {addCandidateToInterested,
    test,
    getInterestedCandidate
} =  require('../controllers/interestedCandidate')


routerInterested
.post('/',addCandidateToInterested)
.get('/',test)
.get('/:jobId',getInterestedCandidate)


module.exports = routerInterested;