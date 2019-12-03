

### 一、项目介绍（图片未加载成功，建议翻墙）

1）说明：本系统为博客后台管理系统，采用前后端分离，本项目为前端项目

2）所用技术

​	  前端：react+antd+axios+moment+braft-editor

​	  后端：egg.js+egg-sequelize+mysql

3）项目截图

**登录页：**

![image-20191128155240576](https://github.com/yuanqi3131/blog-serve/blob/master/public/screenShot/image-20191128155240576.png)

**文章列表：**

![image-20191128155902011](https://github.com/yuanqi3131/blog-serve/blob/master/public/screenShot/image-20191128155902011.png)

**发布文章：**

![image-20191128155928671](https://github.com/yuanqi3131/blog-serve/blob/master/public/screenShot/image-20191128155928671.png)

**角色管理：**

![image-20191128155952817](https://github.com/yuanqi3131/blog-serve/blob/master/public/screenShot/image-20191128155952817.png)

菜单管理：

![image-20191128160007340](https://github.com/yuanqi3131/blog-serve/blob/master/public/screenShot/image-20191128160007340.png)

用户管理：

![image-20191128160029758](https://github.com/yuanqi3131/blog-serve/blob/master/public/screenShot/image-20191128160029758.png)

**标签管理：**

![image-20191128160110620](https://github.com/yuanqi3131/blog-serve/blob/master/public/screenShot/image-20191128160110620.png)

### 二、运行项目

1）先下载本项目

2）修改数据库密码，改成你的数据库用户名与密码

![image-20191128163256771](https://github.com/yuanqi3131/blog-serve/blob/master/public/screenShot/image-20191128163256771.png)

分别对应开发 测试 生产环境的数据库用户名密码

![image-20191128163325445](https://github.com/yuanqi3131/blog-serve/blob/master/public/screenShot/image-20191128163325445.png)

然后：

```
$ npm i
$ npx sequelize db:migrate
$ npm run dev
$ open http://localhost:7001/
```

3）下载前端项目: https://github.com/yuanqi3131/blog-serve

```
$ npm i
$ npm start
```

3) 执行sql 文件 ，在所建立的数据库blog数据库中执行database目录下的blog.sql文件

4）打开网页

```
$ http://localhost:3000/
```

