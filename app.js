// 导包
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var options = {
	host: '127.0.0.1',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'news'
};
var sessionStore = new MySQLStore(options);

// 实例化app对象
const app = express();

// 配置包
app.engine('html', require('express-art-template'));

app.use(bodyParser.urlencoded({
	extended: false
}));

//app.use(session({
//	secret: 'keyboard cat',
//	resave: false,
//	saveUninitialized: true
//}));

app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));

// 统一处理静态资源
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));

// 使用配置路由模块
app.use(router);

// 监听端口
app.listen(2020, () => {
	console.log('run server');
});