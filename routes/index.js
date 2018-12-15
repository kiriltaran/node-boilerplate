const express = require('express');

const userRouter = require('./userRouter');

const router = express();

router.get('/', (req, res) => {
  res.json({ app: 'node-boilerplate', route: 'index' });
});

router.get('/user', userRouter);

module.exports = router;
