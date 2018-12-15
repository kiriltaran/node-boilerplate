const express = require('express');

const router = express();

router.get('/user', (req, res) => {
  res.json({ app: 'node-boilerplate', route: 'user' });
});

module.exports = router;
