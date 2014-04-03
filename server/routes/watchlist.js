var Watchlist = require('../models').watchlist;
exports.all = function(req, res) {
  new Watchlist().all(function(err, watchlists) {
    res.send(watchlists);
  })
}
exports.create = function(req, res) {
  new Watchlist().create(req.body, function(error, watchlist) {
    res.send(watchlist);
  })

}
