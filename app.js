const express = require('express');
const logger = require('morgan');
const chalk = require('chalk');

const { port, env } = require('./config');
const { indexRouter, userRouter } = require('./routers');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
});

app.listen(port, () => {
  global.console.log(chalk.green(`Server running on port ${port} in ${env} environment`));
});
