var express = require('express');
var fs = require('fs');
var net = require('net');
var router = express.Router();

router.get('/', function(req, res, next) {
  fs.readdir('/var/lib/mpd/music', function(err, files) {
    if (!err) {
      console.log(files);
      res.json(files);
    } else {
      res.json([]);
    }
  });
});

module.exports = router;
