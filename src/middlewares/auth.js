import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  // Get the token from the header
  const token = req.header('Authorization');

  // Return an error if the token is not present
  if (!token) {
    return res.status(401).send({ message: 'No token, authorization denied' });
  }

  // Verify the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send({ message: 'Token is not valid' });
  }
};

export default auth;
