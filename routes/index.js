var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index',
    {
      title: "Home Page",
      name: "Site Name",
      content: "This is page description"
    }
  )
});
module.exports = router;