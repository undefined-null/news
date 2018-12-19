const connection = require('../config/db_config');
// 检查邮箱
exports.checkEmail = (email, callback) => {
	var sql = 'select * from users where email=?';
	connection.query(sql, email, (err, data) => {
		//console.log(data);
//		if (err) {
//			return callback(err, null);
//		}
//		callback(null, data);
		
		callback(err, data);
	});
};

// 检查昵称
exports.checkNickname = (nickname, callback) => {
	var sql = 'select * from users where nickname = ?';
	connection.query(sql, nickname, (err, data) => {
		callback(err, data);
	});
};

// 注册新用户
exports.addNewUser = (body, callback) => {
	const sql = 'insert into users set ?';
	connection.query(sql, body, (err, data) => {
		callback(err, data);
	});
};
