'use strict'

const Controller = require('../core/baseController');

class UserRoleController extends Controller {
  async create() {
    const { ctx } = this;
    const obj = ctx.request.body;
    const result = await ctx.service.userRole.create(obj);
    ctx.body = result;
  }
}

module.exports = UserRoleController