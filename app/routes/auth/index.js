var express = require('express');
var router = express.Router();
var cors = require('../../middleware/cors');
var auth = require('./authController.js');

router.post('/session', cors, auth.login);
router.get('/session', cors, auth.verifyToken);

module.exports = router;
