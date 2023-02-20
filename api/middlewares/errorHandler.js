const errorHandler= (req, res, err) => {
  console.error(err.stack);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).send({ message: err.message });
};

export default errorHandler
