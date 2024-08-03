const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierControlller');

router.post('/supplier', supplierController.createSupplier);
router.get('/supplier', supplierController.getAllSuppliers);
// Define other routes...

module.exports = router;