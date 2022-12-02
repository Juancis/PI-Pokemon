const express = require('express');
const router = express.Router();
const { getAllTypes } = require('../services/types');
router.use(express.json());

router.get('/', async (req, res) => {
  const types = await getAllTypes();
  return res.json(types);
});

module.exports = router;
