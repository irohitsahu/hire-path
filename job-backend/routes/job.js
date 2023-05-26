const express = require("express");
const routerJob = express.Router();

const getJobById = require('../controllers/job/getJobById')


routerJob
.get('/:id',getJobById)



module.exports = routerJob;