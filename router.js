const express = require('express');
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic');

const router = express.Router();

router.get('/signin', c_user.getSignin);

router.post('/signin', c_user.checkSignin);

router.get('/', c_topic.getTopic);

module.exports = router;