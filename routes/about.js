var express = require('express');
var router = express.Router();

router.get('/about', function(req, res){
  res.render('about',
    {
      title: "About Page",
      name: "About",
      content: "page description"
    }
  )
});
module.exports = router;