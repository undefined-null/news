// 导包
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

// 实例化app对象
const app = express();

// 配置包
app.engine('html', require('express-art-template'));

app.use(bodyParser.urlencoded({ extended: false }));

// 统一处理静态资源
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));

// 使用配置路由模块
app.use(router);

// 监听端口
app.listen(2020, () => {
	console.log('run server');
});