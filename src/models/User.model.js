import { DataTypes } from 'sequelize';
import sequelize from '../utils/sequelize_db';

const User = sequelize.define('user', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  mobile: DataTypes.STRING,
  password: DataTypes.STRING,
  roleId: {
    type: DataTypes.UUID,
    defaultValue: null,
    references: {
      model: 'Role',
      key: 'id'
    }
  },
  created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

User.sync()

export default User;
