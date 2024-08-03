const express = require('express');
const router = express.Router();
const componentController = require('../controllers/componentController');

router.post('/component', componentController.createComponent);
router.get('/component', componentController.getAllComponents);
// Define other routes...

module.exports = router;