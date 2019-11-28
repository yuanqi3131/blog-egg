const Service = require('../core/baseService');

class RoleService extends Service {
  async create(obj) {
    const { ctx } = this;
    let { name, description } = obj
    let res
    let result = await ctx.model.Role.findOne({
      where: {
        name
      }
    })
    if (!result) {
      let createTime = new Date();
      const tag = new ctx.model.Role({ name, createTime, description });
      await tag.save();
      res = ctx.helper.returnObj(0, '添加成功');
    } else {
      res = ctx.helper.returnObj(-1, '角色名已经存在');
    }
    return res;
  }
  async index() {
    const { ctx } = this;
    let result = await ctx.model.Role.findAll();
    return ctx.helper.returnObj(0, '成功', result)
  }
  async destroy(id) {
    const { ctx } = this;
    let role = await ctx.model.Role.findOne({
      where: {
        id
      }
    })
    await role.destroy()
    return ctx.helper.returnObj(0, '删除成功');
  }
}

module.exports = RoleService;