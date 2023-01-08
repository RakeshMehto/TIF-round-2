import { DataTypes } from 'sequelize';
import sequelize from '../utils/sequelize_db';

const Role = sequelize.define('role', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: DataTypes.STRING,
  scopes: DataTypes.ARRAY(DataTypes.STRING),
  created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

Role.sync()
export default Role;
