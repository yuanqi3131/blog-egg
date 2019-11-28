const BaseController = require('../core/baseController');

class RoleController extends BaseController {
  async create() {
    const { ctx } = this;
    const obj = ctx.request.body;
    if (!obj.name) {
      ctx.body = ctx.helper.returnObj(-1, '角色名为空', {});
    }
    const result = await ctx.service.role.create(obj);
    ctx.body = result;
  }
  async index() { // 查询标签列表
    const { ctx } = this;
    const result = await ctx.service.role.index();
    ctx.body = result;
  }
  async destroy() { // 删除标签
    const { ctx } = this;
    const obj = ctx.request.body;
    const result = await ctx.service.role.destroy(obj.id);
    ctx.body = result;
  }
}

module.exports = RoleController;