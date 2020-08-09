var express = require('express');
var router = express.Router();

/* GET Sign In Page. */
router.get('/', (req, res, next) => {
  res.send('Sign In Form');
});

/* POST Sign In Page. */
router.post('/', (req, res, next) => {
  res.json({
    // POST Data
  });
});

module.exports = router;
