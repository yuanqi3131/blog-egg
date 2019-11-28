const BaseController = require('../core/baseController');
let rule = {
  name: { type: 'string', required: true, message: '必填项' }
}
class MenuController extends BaseController {
  async create() {
    const { ctx } = this;
    const menu = ctx.request.body;
    await ctx.validate(rule, menu);
    const result = await ctx.service.menu.create(menu);
    ctx.body = result;
  }
  async index() { // 查询标签列表
    const { ctx } = this;
    const result = await ctx.service.menu.index();
    ctx.body = result;
  }
  async destroy() { // 删除标签
    const { ctx } = this;
    const obj = ctx.request.body;
    const result = await ctx.service.menu.destroy(obj.id);
    ctx.body = result;
  }
  async update() { // 编辑
    const { ctx } = this;
    const obj = ctx.request.body;
    const result = await ctx.service.menu.update(obj);
    ctx.body = result;
  }
  async menu() {
    // 获得权限菜单
    const { ctx } = this;
    let roleId = ctx.query.id
    const result = await ctx.service.menu.menu(roleId)
    ctx.body = result;
  }
}

module.exports = MenuController;