var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('quails');
});

router.get('/add', function(request, response) {
  response.render('add');
});

router.post('/add', function(request, response) {
  response.redirect('/quails');
});

module.exports = router;
