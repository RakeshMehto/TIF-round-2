import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (request, response) => {
  response.json({
    info: 'Hello Internet Folks!'
  })
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`)
})
