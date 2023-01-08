import express from 'express';
import sequelize from './utils/sequelize_db.js';
const app = express();
const PORT = process.env.PORT || 3000;

if (!sequelize.authenticate()) {
  console.log('Something went wrong with your DB Connection');
}

app.get('/', (request, response) => {
  response.json({
    info: 'Hello Internet Folks!'
  })
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`)
})
