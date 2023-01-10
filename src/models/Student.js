import { DataTypes, Model } from 'sequelize';

class Student extends Model { }

Student.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: 'User',
      key: 'id',
    },
    allowNull: false,
  },
  schoolId: {
    type: DataTypes.UUID,
    references: {
      model: 'School',
      key: 'id',
    },
    allowNull: false,
  },
  created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Student',
});

export default Student;
