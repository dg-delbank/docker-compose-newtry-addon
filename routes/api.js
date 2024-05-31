const express = require('express');
const router = express.Router();
const OtherModel = require('../models/OtherModel');

router.get('/other', (req, res) => {
  console.log("Received request for /other");
  res.status(200).send('Second API is working!');
});

router.get('/others', (req, res) => {
  console.log("Received request for /others");
  res.status(200).send('Second API is working! Amem!');
});

module.exports = router;
