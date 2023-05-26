const express = require('express');
const router = express.Router();


const { getAllProgrammingLanguage,
    updateProgrammingLanguage,
    setPreset,
    getAllLanguage,
    updateLanguage,
    getAllTools,
    updateTools,
    getAllLocations,
    updateLocation,
    getAllStreams,
    updateStream

} = require('../controllers/presetController');



router
    .post('/', setPreset)


    .get('/programminglanguage', getAllProgrammingLanguage)
    .post('/programminglanguage', updateProgrammingLanguage)
    .get('/languages', getAllLanguage)
    .post('/languages', updateLanguage)

    .get('/tools', getAllTools)
    .post('/tools', updateTools)

    .get('/locations', getAllLocations)
    .post('/locations', updateLocation)

    .get('/streams', getAllStreams)
    .post('/streams', updateStream)

module.exports = router;