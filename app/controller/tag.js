const BaseController = require('../core/baseController');

class TagController extends BaseController {
  async create() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    if (!name) {
      ctx.body = ctx.helper.returnObj(-1, '标签名为空', {});
    }
    const result = await ctx.service.tag.create(name);
    ctx.body = result;
  }
  async index() { // 查询标签列表
    const { ctx } = this;
    const result = await ctx.service.tag.index();
    ctx.body = result;
  }
  async update() { // 修改标签
    const { ctx } = this;
    const obj = ctx.request.body;
    const result = await ctx.service.tag.update(obj);
    ctx.body = result;
  }
  async destroy() { // 删除标签
    const { ctx } = this;
    const obj = ctx.request.body;
    const result = await ctx.service.tag.destroy(obj.id);
    ctx.body = result;
  }
}

module.exports = TagController;