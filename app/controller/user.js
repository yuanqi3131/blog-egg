'use strict';

const Controll = require('egg').Controller;
const crypto = require('crypto')

let rule = {
  username: { type: 'string', required: true, message: '必填项' },
  password: { type: 'string', required: true, message: '必填项' },
}
class UserControll extends Controll {
  async login() { // 登录
    const { ctx } = this;
    const userInfo = ctx.request.body;
    await ctx.validate(rule, userInfo);
    userInfo.password = crypto.createHash('md5').update(userInfo.password).digest('hex')
    const result = await ctx.service.user.login(userInfo)
    ctx.body = result
  }
  async register() {
    // 注册
    const { ctx } = this;
    const userInfo = ctx.request.body;
    rule.email = { type: 'string', required: true, message: '必填项' }
    await ctx.validate(rule, userInfo);
    userInfo.password = crypto.createHash('md5').update(userInfo.password).digest('hex')
    const result = await ctx.service.user.register(userInfo)
    ctx.body = result
  }
}

module.exports = UserControll