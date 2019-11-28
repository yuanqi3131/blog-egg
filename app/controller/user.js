'use strict';

const BaseController = require('../core/baseController');
const crypto = require('crypto');

let rule = {
  username: { type: 'string', required: true, message: '必填项' },
  password: { type: 'string', required: true, message: '必填项' },
}
class UserControll extends BaseController {
  async index() {
    const { ctx } = this;
    const result = await ctx.service.user.index();
    ctx.body = result;
  }
  async login() { // 登录
    const { ctx } = this;
    const userInfo = ctx.request.body;
    await ctx.validate(rule, userInfo);
    userInfo.password = crypto.createHash('md5').update(userInfo.password).digest('hex');
    const result = await ctx.service.user.login(userInfo);
    ctx.body = result;
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
  async upload() {
    const { ctx } = this;
    const stream = await ctx.getFileStream()
    let filename = await ctx.service.user.upload(stream);
    //文件响应
    ctx.body = {
      url: '/public/uploads/' + filename
    };
  }
  async destroy() {
    const { ctx } = this;
    const obj = ctx.request.body;
    const result = await ctx.service.user.destroy(obj.id);
    ctx.body = result;
  }
}

module.exports = UserControll