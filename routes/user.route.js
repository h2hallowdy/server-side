var express = require('express')
var router = express.Router()
var validate = require('../validate/user.validate')
var controller = require('../controllers/user.controller');

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create', validate.postCreate, controller.postCreate);



module.exports = router;