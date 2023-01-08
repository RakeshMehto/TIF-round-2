import { Sequelize } from 'sequelize';

const School = sequelize.define('school', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  country: Sequelize.STRING,
  created: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  updated: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});
