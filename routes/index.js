var express = require('express');
var router = express.Router();

/* GET home page routes. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET contact page routes. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* GET projects page routes. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET about page routes. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;
