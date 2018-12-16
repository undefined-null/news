// 导包
const express = require('express');
const router = require('./router');

// 实例化app对象
const app = express();

app.engine('html', require('express-art-template'));

// 统一处理静态资源
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));

// 使用配置路由模块
app.use(router);

// 监听端口
app.listen(7614, function () {
	console.log('run server');
});
