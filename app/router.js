'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
};
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/login', controller.user.login);
  // router.post('/api/register', controller.user.register);

  // // 标签
  router.post('/api/tag', controller.tag.create);
  router.get('/api/tag', controller.tag.index);
  router.put('/api/tag', controller.tag.update);
  router.delete('/api/tag', controller.tag.destroy);
  //文章
  router.post('/api/article', controller.article.create);
  router.get('/api/article', controller.article.index);
  router.delete('/api/article', controller.article.destroy);
  //用户
  router.get('/api/user', controller.user.index);
  router.delete('/api/user', controller.user.destroy);
  // 上传图片
  router.post('/api/upload', controller.user.upload);
  // 获取图片资源
  router.get('/api/img', controller.img.index)

  router.get('/api/role', controller.role.index);
  router.post('/api/role', controller.role.create);
  router.delete('/api/role', controller.role.destroy);
  router.post('/api/userRole', controller.userRole.create);

  // // 菜单
  router.get('/api/menu', controller.menu.index);
  router.post('/api/menu', controller.menu.create);
  router.delete('/api/menu', controller.menu.destroy);
  router.put('/api/menu', controller.menu.update);

  router.post('/api/roleMenu', controller.roleMenu.create);
  router.get('/api/roleMenu', controller.roleMenu.index);
  router.get('/api/getMenu', controller.menu.menu);

};
