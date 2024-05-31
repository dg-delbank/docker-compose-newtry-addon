const express = require('express');
const router = express.Router();
const OtherModel = require('../models/OtherModel');

router.get('/api2/other', (req, res) => {
  console.log("Received request for /other");
  res.status(200).send('Second API is working!');
});

router.get('/api2/others', (req, res) => {
  console.log("Received request for /others");
  res.status(200).send('Second API is working! Amem!');
});

module.exports = router;
