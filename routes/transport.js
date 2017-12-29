var express = require('express');
var net = require('net');
var router = express.Router();


router.get('/play', function(req, res, next) {
  var client=new net.Socket();
  var state = 'connecting';
  client.connect(6600,'127.0.0.1', function () {
    client.on('data', function(data) {
      console.log('State:' + state + ', data:' + data);
      switch (state) {
        case 'connecting':
          client.write('play\n');
          state = 'command';
          break;
        case 'command':
          state = 'idle';
          res.send('done');
          break;
        default:
          break;
      }
    });
  });
});

router.get('/pause', function(req, res, next) {
  var client=new net.Socket();
  var state = 'connecting';
  client.connect(6600,'127.0.0.1', function () {
    client.on('data', function(data) {
      console.log('State:' + state + ', data:' + data);
      switch (state) {
        case 'connecting':
          client.write('pause\n');
          state = 'command';
          break;
        case 'command':
          state = 'idle';
          res.send('done');
          break;
        default:
          break;
      }
    });
  });
});


module.exports = router;
