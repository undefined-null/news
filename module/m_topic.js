const connection = require('../config/db_config');

exports.getTopicData = (callback) => {
	const sql = 'select * from topics order by id desc';
	connection.query(sql, (err, data) => {
		callback(err, data);
	});
};

exports.insertTopic = (body, callback) => {
	const sql = 'insert into topics set ?';
	connection.query(sql, body, (err, data) => {
		callback(err, data);
	});
};
