/**
 * session权限认证
 */
const crypto = require('crypto');
module.exports = app => {
  return async function auth(ctx, next) {
    let session = ctx.session.userId
    if (!session) {
      ctx.status = 401
      ctx.body = ctx.helper.returnObj(401, '登录过期', {});
    }
    await next();
  }
}