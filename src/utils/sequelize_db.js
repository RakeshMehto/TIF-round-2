import { Sequelize } from 'sequelize';
// export default async function db_connection() {
const sequelize = new Sequelize('internet_folks', 'imskanand', 'imskanand', {
  host: 'localhost',
  dialect: 'postgres'
});

export default sequelize;
