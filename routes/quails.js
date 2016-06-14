var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex.table('quails').select().then(function(quails) {
    console.log(quails);
    res.render('quails', {quails: quails});
  });
});

router.get('/add', function(request, response) {
  response.render('add');
});

router.post('/add', function(request, response) {
  // grab info from post
  var name = request.body.name;
  var image = request.body.image;
  var description = request.body.description;
  // insert into table
  knex.table('quails').insert({
    name: name,
    image: image,
    description: description
  }).then(function(message) {
    // redirect to /quails async style instead of putting redirect outside of this
    console.log(message);
    response.redirect('/quails');
  }).catch(function(error) {
    // catch error and if error direct to next middleware in app.js to send error page
    next(error);
  });
});

module.exports = router;
