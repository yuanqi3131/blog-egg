/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1564023036699_1263';

  // add your middleware config here
  config.middleware = ['jwt', 'errorHandler'];
  config.jwt = {
    secret: 'egg-api-jwt',
    enable: true,
    ignore: ['/api/login', '/api/register'], // 哪些请求不需要认证
  }
  config.mongoose = {
    client: {
      url: 'mongodb://admin:123456@127.0.0.1:27017/admin', options: {},
    },
  };
  config.security = {
    csrf: {
      headerName: 'authorization',// 自定义请求头
      ignore: ['/api/login', '/api/register']
    }
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
