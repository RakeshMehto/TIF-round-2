import Role from "./Role.js";
import School from "./School.js";
import Student from "./Student.js";
import User from "./User.js";

import sequelize from "../config/sequelize_db.js";

// Initialize the models
// User.init(sequelize);
// Role.init(sequelize);
// Student.init(sequelize);
// School.init(sequelize);

// Set up relationships between the models
User.belongsTo(Role);
Student.belongsTo(User);
Student.belongsTo(School);

// Sync the models with the database
sequelize
  .sync()
  .then(() => console.log("Models synced with the database"))
  .catch((error) => console.error(error));

export { User, Role, Student, School };
