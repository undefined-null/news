const m_topic = require('../module/m_topic');
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
