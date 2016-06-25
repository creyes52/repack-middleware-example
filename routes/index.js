var express = require('express');
var router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = [
    {name: "Cat", count: 2},
    {name: "Teseract", count: 4}
  ];
  
  res.renderReact('MainComponent', {myObjects: data }, function(err, html) {
    res.locals.reactHtml = html;
    res.render('index', { title: 'Express' });
  });
});

module.exports = router;
