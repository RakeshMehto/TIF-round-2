import { DataTypes, Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      mobile: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roleId: {
        type: DataTypes.UUID,
        defaultValue: null,
        references: {
          model: 'Role',
          key: '_id',
        },
      },
      created: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'User',
    });
  }

  static associate(models) {
    this.hasOne(models.Role, { foreignKey: '_id', sourceKey: 'roleId' });
  }
}

export default User;
