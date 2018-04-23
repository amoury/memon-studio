const express = require('express');
const router = express.Router();
const { homePage, aboutPage } = require('../controllers/homeController');

router.get('/', homePage);
router.get('/about', aboutPage);

module.exports = router;
