const express = require('express');
const router = express.Router();
const OtherModel = require('../models/OtherModel');

router.get('/other', (req, res) => {
  res.status(200).send('Second API is working!');
});

module.exports = router;
