var Watchlist = require('../models').watchlist;
exports.create = function(req, res) {
  new Watchlist().addRepo(req.param('id'), req.body, function(error, watchlist) {
    res.send(watchlist);
  })
}
