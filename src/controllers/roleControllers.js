import Role from '../models/Role.model'

exports.createRole = (req, res, next) => {
  // Validate the request body and return an error if invalid
  if (!req.body.name || !req.body.scopes) {
    return res.status(400).send({ message: 'Missing required fields' });
  }

  // Create a new role using the name and scopes from the request body
  Role.create({
    name: req.body.name,
    scopes: req.body.scopes,
  })
    .then((role) => res.status(201).send(role))
    .catch((error) => res.status(500).send({ message: error.message }));
};

exports.getAllRoles = (req, res, next) => {
  Role.findAll()
    .then((roles) => res.status(200).send(roles))
    .catch((error) => res.status(500).send({ message: error.message }));
};
