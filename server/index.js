var application_root = __dirname,
    express = require( 'express' ),
    path = require( 'path' ),
    routes = require('./routes'),
    config = require('./configuration')
;


var app = express();

app.configure( function() {
  app.use( express.logger() );
  app.use( express.bodyParser() );
  app.use( express.methodOverride() );
  app.use( app.router );
  app.use( express.static( path.join( application_root, '../client') ) );
  app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.set('port', config.get('express:port'));
});
app.post('/watchlists', routes.watchlist.create);
app.listen(config.get('express:port'), function() {
  console.log("started node at port "+config.get('express:port'));
})
