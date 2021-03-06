var confs = {
  production: require('./production'),
  development: require('./development')
};

var env = process.env.NODE_ENV;
console.log('Getting config for ', env);

module.exports = confs[env];
