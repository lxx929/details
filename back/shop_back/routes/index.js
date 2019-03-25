var express = require('express');
var router = express.Router();
const Mongo = require('mongodb-curd');
const dbBase = 'shops';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('api/getinfo', function(req, res, next) { //查找shop信息
    Mongo.find(dbBase, 'info', data, function(result) {
        if (!result) {
            res.send({ code: 0, res: "error" });
        } else {
            res.send({ code: rs, res: "success", data: result });
        }
    });
});

router.get('api/getlist', function(req, res, next) { //查找评论信息
    Mongo.find(dbBase, 'cont', req.query, function(result) {
        if (!result) {
            res.send({ code: 0, res: "error" });
        } else {
            res.send({ code: rs, res: "success", data: result });
        }
    });
});

module.exports = router;