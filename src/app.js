import express from 'express';
import bodyParser from 'body-parser';

import sequelize from './config/sequelize_db.js';

import roleRouter from './routes/roleRoutes.js'
import schoolRouter from './routes/schoolRoutes.js'
import studentRouter from './routes/studentRoutes.js'
import userRouter from './routes/userRoutes.js'

import auth from './middlewares/auth.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

if (!sequelize.authenticate()) {
  console.log('Something went wrong with your DB Connection');
}

app.get('/', (request, response) => {
  response.json({
    info: 'Hello Internet Folks!'
  })
})

// Add auth middleware to all routes except signup and signin
app.use(auth.unless({ path: ['/user/signup', '/user/signin'] }));

// Add routes
app.use('/user', userRouter);
app.use('/role', roleRouter);
app.use('/school', schoolRouter);
app.use('/student', studentRouter);

// Add error handler middleware
app.use(errorHandler);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port 300${PORT}`);
  });
});
