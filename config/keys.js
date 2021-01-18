// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys!!!
  module.exports = require('./dev');
}

// mongodb+srv://junming21:19900220Zjm@cluster0.9lcho.mongodb.net/emaily-prod?retryWrites=true&w=majority

// clientID
// 520948912303-ee0d0orlvfngvmuo981l25g0guctf5dp.apps.googleusercontent.com
// clientSecret
// Gc74dDeVwNmiwKNddcjz8V0N
