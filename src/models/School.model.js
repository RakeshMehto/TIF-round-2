import { DataTypes } from 'sequelize';
import sequelize from '../utils/sequelize_db';

const School = sequelize.define('school', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  country: DataTypes.STRING,
  created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

export default School;

