const express = require('express');
const router = express.Router();
const { mainPage } = require('../controllers/adminController');

router.get('/', mainPage);

module.exports = router;