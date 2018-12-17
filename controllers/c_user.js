const m_user = require('../module/m_user');

exports.getSignin = (req, res) => {
	res.render('./signin.html');
};

exports.checkSignin = (req, res) => {
	var body = req.body;
	//console.log(body);
	
	m_user.checkEmail(body.email, (err, data) => {
		if(err) {
			return res.send({
				code: 500,
				msg: '服务器错误！！！'
			});
		}

		if(data.length === 0) {
			return res.send({
				code: 100,
				msg: '用户名不存在！'
			});
		}

		if(body.password !== data[0].password) {
			return res.send({
				code: 101,
				msg: '密码错误！'
			});
		}

		res.send({
			code: 200,
			msg: '验证成功！'
		});
	});
};