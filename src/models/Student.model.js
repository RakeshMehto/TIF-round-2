import { DataTypes } from 'sequelize';
import sequelize from '../utils/sequelize_db';

const Student = sequelize.define('student', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: Sequelize.STRING,
  userId: {
    type: Sequelize.UUID,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  schoolId: {
    type: Sequelize.UUID,
    references: {
      model: 'School',
      key: 'id'
    }
  },
  created: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  updated: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

Student.sync()

export default Student;
