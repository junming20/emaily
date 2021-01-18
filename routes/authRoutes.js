const passport = require('passport');

// return a function
module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'] // what access we want to have in this google profile
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout(); // logout is a function automatically attached to req by passport
    res.redirect('/');
  });
  // test authentication, inspect the req.user property.
  // If our user model exist on that, means authentication working
  app.get('/api/current_user', (req, res) => {
    res.send(req.user); // passport automaticly attached the user property to req object
  });
};
