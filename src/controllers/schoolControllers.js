import { School } from '../models/index.js';
import scopes from '../utils/scopes.js';

export const createSchool = (req, res, next) => {
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

export const getAllSchools = (req, res, next) => {
  // Check if the user has the correct scope to get all schools
  if (!scopes.checkScope(req.user.scopes, 'school-get')) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
  School.findAll()
    .then((schools) => res.status(200).send(schools))
    .catch((error) => res.status(500).send({ message: error.message }));
};

export const getStudents = (req, res) => {
  try {
    const schools = School.findAll({
      include: [
        {
          model: Student,
          as: 'students'
        }
      ]
    });
    return res.status(200).send({
      status: true,
      content: {
        data: schools
      }
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      content: {
        message: 'Error fetching schools with students'
      }
    });
  }
};
