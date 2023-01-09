const School = require('../models').School;
const scopes = require('../utils/scopes');

exports.createSchool = (req, res, next) => {
  // Validate the request body and return an error if invalid
  if (!req.body.name || !req.body.city || !req.body.state || !req.body.country) {
    return res.status(400).send({ message: 'Missing required fields' });
  }

  // Check if the user has the correct scope to create a school
  if (!scopes.checkScope(req.user.scopes, 'school-create')) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  // Create a new school using the fields from the request body
  School.create({
    name: req.body.name,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
  })
    .then((school) => res.status(201).send(school))
    .catch((error) => res.status(500).send({ message: error.message }));
};

exports.getAllSchools = (req, res, next) => {
  // Check if the user has the correct scope to get all schools
  if (!scopes.checkScope(req.user.scopes, 'school-get')) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  School.findAll()
    .then((schools) => res.status(200).send(schools))
    .catch((error) => res.status(500).send({ message: error.message }));
};

exports.getSchoolStudents = (req, res, next) => {
  // Check if the user has the correct scope to get the students of a school
  if (!scopes.checkScope(req.user.scopes, 'school-students')) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  School.findByPk(req.params.id)
    .then((school) => {
      if (!school) {
        return res.status(404).send({ message: 'School not found' });
      }

      school.getStudents()
        .then((students) => res.status(200).send(students))
        .catch((error) => res.status(500).send({ message: error.message }));
    })
    .catch((error) => res.status(500).send({ message: error.message }));
};
