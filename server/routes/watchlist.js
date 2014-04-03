var Watchlist = require('../models').watchlist;
exports.create = function(req, res) {
  new Watchlist().create(req.body, function(error, watchlist) {
    res.send(watchlist);
  })

}
