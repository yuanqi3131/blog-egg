const Service = require('egg').Service;
const jwt = require('jsonwebtoken')
class UserService extends Service {
  async login(userInfo) {
    const { ctx } = this;
    let res
    const result = await ctx.model.User.findOne({ //判断用户是否存在
      username: userInfo.username
    }); //
    if (!result) {
      res = ctx.helper.returnObj(-1, '用户不存在，请注册');
    } else {
      const result = await ctx.model.User.findOne({ username: userInfo.username, password: userInfo.password });
      if (!result) { // nModified为0 没有更改说明用户名密码不对 为1账号密码正确
        res = ctx.helper.returnObj(-1, '用户名账号密码错误');
      } else {
        // 生成token
        userInfo.loginTime = ctx.helper.handlerDate(new Date())
        await ctx.model.User.update({ username: userInfo.username }, userInfo, { multi: true })
        const token = jwt.sign({ username: result.username }, this.config.jwt.secret, {
          expiresIn: 60 * 60
        })
        result.loginTime = userInfo.loginTime
        res = ctx.helper.returnObj(0, '登录成功', result);
        res.token = token
      }
    }
    return res
  }
  async register(userInfo) {
    const { ctx } = this
    let res
    const result = await ctx.model.User.findOne({
      username: userInfo.username
    })
    if (result) {
      // 用户已经被注册
      res = ctx.helper.returnObj(-1, '用户已经被注册');
    } else {
      // 注册
      userInfo.createTime = ctx.helper.handlerDate(new Date())
      const user = new ctx.model.User(userInfo)
      await user.save()
      // await ctx.model.User.save(userInfo)
      res = ctx.helper.returnObj(0, '注册成功');
    }
    return res
  }
}
module.exports = UserService