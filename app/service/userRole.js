'use strict';

const Service = require('../core/baseService');

class UserRoleService extends Service {
  async create(obj) {
    const { ctx } = this;
    let { userId, roleId } = obj
    const result = await ctx.model.UserRole.findOne({
      where: {
        userId
      }
    })
    if (!result) {
      let userRole = new ctx.model.UserRole({ userId, roleId });
      await userRole.save();
    } else {
      await result.update({
        roleId
      })
    }
    return ctx.helper.returnObj(0, '添加成功');
  }
}

module.exports = UserRoleService;