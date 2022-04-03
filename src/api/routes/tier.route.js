const express = require('express');

const router = express.Router();

const TierController = require('../controllers/tier.controller');

router.get('/', TierController.getAll);

router.get('/:tid/:pid', TierController.getByPid);

module.exports = router;
