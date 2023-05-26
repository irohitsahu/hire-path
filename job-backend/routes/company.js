const express = require("express");
const routerCompany = express.Router();

const setCompany = require("../controllers/company/setCompany");
const updateCompany = require("../controllers/company/updateCompany");
const getCompanyDetails = require("../controllers/company/getCompanyDetails");
const getCompanyByID = require("../controllers/company/getCompanyById");
const getJobById = require('../controllers/job/getJobById');
const updateJob = require('../controllers/job/updateJob');
const insertJobById = require('../controllers/job/insertJobById');
const setJob = require('../controllers/job/setJob')

routerCompany
  .post("/", setCompany)
  .put("/:id/companydetails", updateCompany)
  .get("/", getCompanyDetails)
  .get("/:id", getCompanyByID)

  .put('/:id/job', updateJob)
  .post('/:companyId/job', setJob)


/*
router.post('/', (req, res) => {
  const { error } = validateGenre(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: candidates.length + 1,
    name: req.body.name
  };
  candidates.push(genre);
  res.send(genre);
});

router.put('/:id', (req, res) => {
  const genre = candidates.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  const { error } = validateGenre(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  genre.name = req.body.name; 
  res.send(genre);
});

router.delete('/:id', (req, res) => {
  const genre = candidates.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  const index = candidates.indexOf(genre);
  candidates.splice(index, 1);

  res.send(genre);
});

router.get('/:id', (req, res) => {
  const genre = candidates.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');
  res.send(genre);
});

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(genre, schema);
}
*/

module.exports = routerCompany;
