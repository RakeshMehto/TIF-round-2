import { Role, User} from '../models/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import scopes from '../utils/scopes.js';

export const signup = (req, res, next) => {
  // Validate the request body and return an error if invalid
  if (!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.mobile || !req.body.password) {
    return res.status(400).send({ message: 'Missing required fields' });
  }
  // Hash the password using BCrypt
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  // Create a new user using the fields from the request body
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    mobile: req.body.mobile,
    password: hashedPassword,
    roleId: req.body.roleId,
  })
    .then((user) => res.status(201).send(user))
    .catch((error) => res.status(500).send({ message: error.message }));
};

export const signin = (req, res, next) => {
  // Validate the request body and return an error if invalid
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ message: 'Missing required fields' });
  }
  // Find the user with the given email
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      // Return an error if the user is not found
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      // Compare the hashed password with the password from the request body
      const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);

      // Return an error if the password is invalid
      if (!isPasswordValid) {
        return res.status(401).send({ message: 'Invalid password' });
      }
      // Find the role associated with the user
      Role.findByPk(user.roleId)
        .then((role) => {
          // Create a JWT token with the user's ID and scopes, and send it in the response
          const token = jwt.sign({ id: user.id, scopes: role.scopes }, process.env.JWT_SECRET);
          res.status(200).send({ token });
        })
        .catch((error) => res.status(500).send({ message: error.message }));
    })
    .catch((error) => res.status(500).send({ message: error.message }));
}

export const getAll = (req, res, next) => {
  // Check if the user has the 'user-get' scope
  if (!scopes.check(req.user.scopes, 'user-get')) {
    return res.status(401).send({ message: 'Insufficient scope' });
  }
  User.findAll()
    .then((users) => res.status(200).send(users))
    .catch((error) => res.status(500).send({ message: error.message }));
};

export const getSingle = (req, res, next) => {
  // Check if the user has the 'user-get' scope
  if (!scopes.check(req.user.scopes, 'user-get')) {
    return res.status(401).send({ message: 'Insufficient scope' });
  }
  User.findByPk(req.params.id)
    .then((user) => {
      // Return an error if the user is not found
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      res.status(200).send(user);
    })
    .catch((error) => res.status(500).send({ message: error.message }));
};
