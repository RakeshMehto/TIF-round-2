import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('internet_folks', 'imskanand', 'imskanand', {
  host: 'localhost',
  dialect: 'postgres'
});

export default sequelize;
