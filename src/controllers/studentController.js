import { Student, User, School } from '../models'
import scopes from '../utils/scopes';

export const createStudent = (req, res, next) => {
  // Validate the request body and return an error if invalid
  if (!req.body.name || !req.body.userId || !req.body.schoolId) {
    return res.status(400).send({ message: 'Missing required fields' });
  }

  // Check if the user has the correct scope to create a student
  if (!scopes.checkScope(req.user.scopes, 'student-create')) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  // Find the user and school associated with the student
  User.findByPk(req.body.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }

      School.findByPk(req.body.schoolId)
        .then((school) => {
          if (!school) {
            return res.status(404).send({ message: 'School not found' });
          }

          // Create a new student using the fields from the request body
          Student.create({
            name: req.body.name,
            userId: req.body.userId,
            schoolId: req.body.schoolId,
          })
            .then((student) => res.status(201).send(student))
            .catch((error) => res.status(500).send({ message: error.message }));
        })
        .catch((error) => res.status(500).send({ message: error.message }));
    })
    .catch((error) => res.status(500).send({ message: error.message }));
};

export const getAllStudents = (req, res, next) => {
  // Check if the user has the correct scope to get all students
  if (!scopes.checkScope(req.user.scopes, 'student-get')) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  Student.findAll()
    .then((students) => res.status(200).send(students))
    .catch((error) => res.status(500).send({ message: error.message }));
};
