var express = require('express');
var router = express.Router();

/* GET Sign Up Page. */
router.get('/', (req, res, next) => {
  res.send('Sign Up Form');
});

/* POST Sign Up Page. */
router.post('/', (req, res, next) => {
  res.json({
    // POST Data
  });
});

module.exports = router;
