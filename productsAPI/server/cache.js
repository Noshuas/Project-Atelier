const redis = require ('redis');
const cache = redis.createClient('cache://cache');

cache.on('error', function(error) {
  console.error(error);
});

module.exports = {
  check: (key, cb) => {
    cache.get(key, (err, result) => {
      if (err) { cb(err, null); }
      cb(null, result);
    });
  },
  add: (key, value) => {
    value = JSON.stringify(value);
    cache.set(key, value);
  }
}