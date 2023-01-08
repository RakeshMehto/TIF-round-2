import express from 'express';
import sequelize from './utils/sequelize_db.js';
const app = express();
const PORT = process.env.PORT || 3000;

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully with Database.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

app.get('/', (request, response) => {
  response.json({
    info: 'Hello Internet Folks!'
  })
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`)
})
