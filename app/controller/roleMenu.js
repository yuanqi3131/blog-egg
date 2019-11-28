'use strict'

const Controller = require('../core/baseController');

class RoleMenuController extends Controller {
  async create() {
    const { ctx } = this;
    const obj = ctx.request.body;
    const result = await ctx.service.roleMenu.create(obj);
    ctx.body = result;
  }
  async index() {
    const { ctx } = this;
    let id = ctx.query.id
    const result = await ctx.service.roleMenu.index(id);
    ctx.body = result;
  }
}

module.exports = RoleMenuController