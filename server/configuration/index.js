var nconf = require('nconf');

function Config(){
  nconf.argv().env('_');
  var environment = nconf.get('NODE:ENV') || 'development';
  nconf.file(environment, './server/environment/' + environment + '.json');
  nconf.file('default', './server/environment/default.json');
}
Config.prototype.get = function(key) {
  return nconf.get(key);
};

module.exports = new Config();
