var express = require('express');
var router = express.Router();

var data = null

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).send(data);
    data = null;
});

router.put('/', function(req, res, next) {
    data = req.body.data;
});

module.exports = router;
