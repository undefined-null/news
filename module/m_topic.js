const connection = require('../config/db_config');

// 获取文章信息
exports.getTopicData = (callback) => {
	const sql = 'select * from topics order by id desc';
	connection.query(sql, (err, data) => {
		callback(err, data);
	});
};

// 新增文章
exports.insertTopic = (body, callback) => {
	const sql = 'insert into topics set ?';
	connection.query(sql, body, (err, data) => {
		callback(err, data);
	});
};

// 文章详情
exports.getTopicDetail = (topicId, callback) => {
	const sql = 'select * from topics where id=?';
	connection.query(sql, topicId, (err, data) => {
		callback(err, data);
	});
};

// 删除文章
exports.deleteTopic = (topicId, callback) => {
	const sql = 'delete from topics where id=?';
	connection.query(sql, topicId, (err, data) => {
		callback(err, data);
	});
};

// 编辑文章
exports.editTopicInfo = (body, topicId, callback) => {
	const sql = 'update topics set ? where id = ?';
	connection.query(sql, [body, topicId], (err, data) => {
		callback(err, data);
	});
};
