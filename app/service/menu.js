const Service = require('../core/baseService');

class MenuService extends Service {
  async create(obj) {
    const { ctx } = this;
    let { name, href, parentId, descript } = obj
    let result = await ctx.model.Menu.findOne({
      where: {
        name
      }
    });
    let res;
    if (!result || result.parentId === 0 && parentId !== 0) {
      let createTime = new Date();
      const tag = new ctx.model.Menu({ name, createTime, href, parentId, descript });
      await tag.save();
      res = ctx.helper.returnObj(0, '添加成功');
    } else {
      res = ctx.helper.returnObj(-1, '菜单名已经存在');
    }
    return res;
  }
  async index() {
    const { ctx } = this;
    let result = await ctx.model.Menu.findAll();
    return ctx.helper.returnObj(0, '成功', result)
  }
  async destroy(id) {
    const { ctx } = this;
    let menu = await ctx.model.Menu.findOne({
      where: {
        id
      }
    })
    await menu.destroy()
    return ctx.helper.returnObj(0, '删除成功');
  }
  async update(obj) {
    const { ctx } = this;
    const menu = await ctx.model.Menu.findOne({
      where: {
        id: obj.id
      }
    })
    await menu.update(obj);
    let res = ctx.helper.returnObj(0, '更新成功！');
    return res;
  }
  async menu(roleId) {
    const { ctx } = this;
    const result = await ctx.model.Role.findAll({
      where:{
        id:roleId
      },
      include: [
        {
          model: ctx.model.Menu
        }
      ],
    })
    return ctx.helper.returnObj(0, '成功！', result);
  }
}

module.exports = MenuService;