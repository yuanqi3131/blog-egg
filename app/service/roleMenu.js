'use strict';

const Service = require('../core/baseService');

class RoleMenuService extends Service {
  async create(obj) {
    const { ctx } = this;
    let { menuId, roleId } = obj
    const result = await ctx.model.RoleMenu.findAll({
      where: {
        roleId
      }
    })
    if (result.length > 0) {
      result.forEach(item => {
        item.destroy()
      })
    }
    menuId = menuId.split(',');
    menuId.forEach(item => {
      let roleMenu = new ctx.model.RoleMenu({ menuId: item, roleId })
      roleMenu.save();
    })
    return ctx.helper.returnObj(0, '添加成功');
  }
  async index(id) {
    const { ctx } = this;
    const result = await ctx.model.RoleMenu.findAll({
      where: {
        roleId: id
      }
    })
    return ctx.helper.returnObj(0, '查询成功', result);
  }
}

module.exports = RoleMenuService;