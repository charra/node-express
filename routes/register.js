const express = require('express');
const router = express.Router();

/* GET user login page. */
router.get('/', (req, res, next) => {
  res.render('userlogin');
});

module.exports = router;
