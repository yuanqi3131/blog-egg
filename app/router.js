'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // app.router.resources('user','/api/login')
  router.post('/api/login', controller.user.login);
  router.post('/api/register', controller.user.register);
};
