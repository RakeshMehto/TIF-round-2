import express from 'express';
import { Sequelize } from 'sequelize';

const app = express();
const PORT = process.env.PORT || 3000;


const sequelize = new Sequelize('internet_folks', 'imskanand', 'imskanand', {
  host: 'localhost',
  dialect: 'postgres'
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.get('/', (request, response) => {
  response.json({
    info: 'Hello Internet Folks!'
  })
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`)
})
