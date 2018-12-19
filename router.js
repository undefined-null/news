const express = require('express');
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic');

const router = express.Router();

router.get('/signin', c_user.getSignin);

router.post('/signin', c_user.checkSignin);

router.get('/', c_topic.getTopic);

router.get('/topic/create', c_topic.getCreateTopic);

router.post('/createTopic', c_topic.createTopic);

router.get('/topic/detail/:topicId', c_topic.topicDetail);

router.get('/signout', c_topic.userSignout);

router.get('/topic/:topicId/delete', c_topic.delTopic);

router.get('/topic/:topicId/edit', c_topic.editTopic);

router.post('/topic/edit/:topicId', c_topic.topicEdit);

router.get('/signup', c_topic.signup);

router.post('/addUser', c_topic.addUser);

module.exports = router;