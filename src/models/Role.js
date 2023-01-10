import { Model, DataTypes } from 'sequelize';

class Role extends Model { }

Role.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scopes: {
    type: DataTypes.ARRAY(DataTypes.STRING),
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
  modelName: 'Role',
});


export default Role;
