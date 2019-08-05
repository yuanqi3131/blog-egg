const jwt = require('jsonwebtoken');

module.exports = options => {
  return async function (ctx, next) {
    const token = ctx.request.header.authorization;
    if (!token) {
      // 如果token不存在
      ctx.throw('401', '未登录，请先登录');
    } else {
      // token存在 验证token
      try {
        let decode = jwt.verify(token, options.sercet);
        console.log(decode)
      } catch (error) {
      }
    }
  }
}