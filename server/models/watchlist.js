var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    config = require('../configuration')
;

mongoose.connection.open(config.get('mongo:url'))

mongoose.model('Watchlist', new Schema({
  name: { type: String, required: 'name is required', unique: true }
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
module.exports = Watchlist;
