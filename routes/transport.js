var express = require('express');
var router = express.Router();


router.get('/play', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/pause', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
