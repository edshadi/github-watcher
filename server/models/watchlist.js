var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    config = require('../configuration')
;

mongoose.model('Watchlist', new Schema({
  name: { type: String, required: 'name is required', unique: true },
  repos: { type: Array }
}));

var WatchlistSchema = mongoose.model('Watchlist');

var Watchlist = function() {};
Watchlist.prototype.create = function(data, callback) {
  console.log(WatchlistSchema)
  var watchlist = new WatchlistSchema(data),
      query = {'name': data.name};

  WatchlistSchema.findOne(query, function(error, watch) {
    if (error) return callback(error, null);
    console.log(watch)
    if (watch !== null) return callback({ errors: { name: { message: "name must be unique" } } }, null);

    watchlist.save(function(error, list) {
      if(error) return callback(error, null);
      data["id"] = watchlist.id
      return callback(null, data);
    })
  });
}

Watchlist.prototype.all = function(callback) {
  WatchlistSchema.find({}, callback);
}

Watchlist.prototype.show = function(name, callback) {
  WatchlistSchema.findOne({name: name}, callback);
}

Watchlist.prototype.addRepo = function(id, repo, callback) {
  WatchlistSchema.findOne({_id: id}, function(err, watchlist) {
    watchlist.repos.push(repo);
    watchlist.save(function(err) {
      callback(err, watchlist)
    })
  });
}

module.exports = Watchlist;
