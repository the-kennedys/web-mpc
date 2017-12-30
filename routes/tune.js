var express = require('express');
var net = require('net');
var router = express.Router();

router.get('/:station', function(req, res, next) {
  var client=new net.Socket();
  var state = 'connecting';
  client.connect(6600,'127.0.0.1', function () {
    client.on('data', function(data) {
      console.log('State:' + state + ', data:' + data);
      switch (state) {
        case 'connecting':
          client.write('clear\n');
          state = 'clearing';
          break;
        case 'clearing':
          console.log(req.params);
          switch (req.params.station) {
            case 'radio1':
              client.write('add "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_p"\n');
              break;
            case 'radio2':
              client.write('add "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio2_mf_p"\n');
              break;
            case 'radio4':
              client.write('add "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio4fm_mf_p"\n');
              break;
            case 'radio5':
              client.write('add "http://a.files.bbci.co.uk/media/live/manifesto/audio/simulcast/hls/uk/sbr_high/ak/bbc_radio_five_live.m3u8"\n');
              break;
            case 'radio6':
              client.write('add "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_6music_mf_p"\n');
              break;
          }
          state = 'tuning';
          break;
        case 'tuning':
          client.write('play\n');
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
