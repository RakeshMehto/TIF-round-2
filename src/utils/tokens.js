import { jwt } from 'jsonwebtoken'

export const createToken = (user, role, scopes) => {
  return jwt.sign({ id: user.id, role: role.name, scopes: scopes }, process.env.JWT_SECRET, {
    expiresIn: '24h'
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
