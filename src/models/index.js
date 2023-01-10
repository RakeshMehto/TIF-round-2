import sequelize from '../config/sequelize_db.js'

import Role from './Role'
import School from './School'
import Student from './Student'
import User from './User'


// Initialize the models
User.init(sequelize);
Role.init(sequelize);
Student.init(sequelize);
School.init(sequelize);

// Set up relationships between the models
User.belongsTo(Role);
Student.belongsTo(User);
Student.belongsTo(School);

// Sync the models with the database
sequelize.sync()
  .then(() => console.log('Models synced with the database'))
  .catch((error) => console.error(error));

export default models = {
  User,
  Role,
  Student,
  School,
};
