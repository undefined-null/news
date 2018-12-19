const m_topic = require('../module/m_topic');
const m_user = require('../module/m_user');
const moment = require('moment');

exports.getTopic = (req, res) => {
	m_topic.getTopicData((err, data) => {
		//console.log(data);
		if(err) {
			return res.send({
				code: 500,
				msg: '服务器错误！！！'
			});
		}
		//console.log(req.session.user);
		res.render('index.html', {
			items: data,
			user: req.session.user
		});
	});
};

exports.getCreateTopic = (req, res) => {
	res.render('topic/create.html');
};

exports.createTopic = (req, res) => {
	const body = req.body;
	body.createdAt = moment().format();
	body.userId = req.session.user[0].id;
	m_topic.insertTopic(body, (err, data) => {
		if(err) {
			return res.send({
				code: 500,
				msg: '服务器错误！！！'
			});
		}
		res.send({
			code: 200,
			msg: '发布成功！'
		});
	});
};

// 文章详情
exports.topicDetail = (req, res) => {
	const topicId = req.params.topicId;
	//console.log(topicId);
	m_topic.getTopicDetail(topicId, (err, data) => {
		if(err) {
			return res.send({
				code: 500,
				msg: '服务器错误！！！'
			});
		}
		res.render('topic/show.html', {
			topic: data[0],
			//userId: req.session.user[0].id
			userId: req.session.user ? req.session.user[0].id : -1
		});
	});
};

// 用户退出
exports.userSignout = (req, res) => {
	delete req.session.user;
	res.redirect('/signin');
};

// 删除文章
exports.delTopic = (req, res) => {
	var topicId = req.params.topicId;
	m_topic.deleteTopic(topicId, (err, data) => {
		if(err) {
			return res.send({
				code: 500,
				msg: '服务器错误！！！'
			});
		}
		res.redirect('/');
	});
};

// 编辑文章
exports.editTopic = (req, res) => {
	var topicId = req.params.topicId;
	m_topic.getTopicDetail(topicId, (err, data) => {
		if(err) {
			return res.send({
				code: 500,
				msg: '服务器错误！！！'
			});
		}
		res.render('topic/edit.html', {
			topic: data[0]
		});
	});
};

exports.topicEdit = (req, res) => {
	var body = req.body;
	var topicId = req.params.topicId;
	m_topic.editTopicInfo(body, topicId, (err, data) => {
		if(err) {
			return res.send({
				code: 500,
				msg: '服务器错误！！！'
			});
		}
		res.send({
			code: 200,
			msg: '编辑成功！'
		});
	});
};

// 渲染注册页面
exports.signup = (req, res) => {
	res.render('signup.html');
};

// 注册新用户
exports.addUser = (req, res) => {
	var body = req.body;
	var email = body.email;
	var nickname = body.nickname;
	
	m_user.checkEmail(email, (err, data) => {
		if (data[0]) {
			return res.send({
				code: 201,
				msg: '该邮箱已注册！'
			});
		}
		m_user.checkNickname(nickname, (err, data) => {
			if (data[0]) {
				return res.send({
					code: 202,
					msg: '该昵称已被占用！'
				});
			}
			m_user.addNewUser(body, (err, data) => {
				if(err) {
					return res.send({
						code: 500,
						msg: '服务器错误！！！'
					});
				}
				res.send({
					code: 200,
					msg: '注册成功！'
				});
			});
		});
	});
};
