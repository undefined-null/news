const connection = require('../config/db_config');
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
