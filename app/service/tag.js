const Service = require('../core/baseService');

class TagService extends Service {
  async create(name) {
    const { ctx } = this;
    let res
    let result = await ctx.model.Tag.findOne({
      where: {
        name
      }
    })
    if (!result) {
      let createTime = new Date();
      const tag = new ctx.model.Tag({ name, createTime });
      await tag.save();
      res = ctx.helper.returnObj(0, '添加成功');
    } else {
      res = ctx.helper.returnObj(-1, '标签已经存在');
    }
    return res;
  }
  async index() {
    const { ctx } = this;
    let result = await ctx.model.Tag.findAll();
    return ctx.helper.returnObj(0, '成功', result)
  }
  async update(obj) {
    const { ctx } = this;
    let res;
    await ctx.model.Tag.update({
      name: obj.name,
      createTime: new Date()
    },
      {
        where: {
          id: {
            [this.op.eq]: obj.id
          }
        }
      });
    res = ctx.helper.returnObj(0, '更新成功');
    return res;
  }
  async destroy(id) {
    const { ctx } = this;
    let tag = await ctx.model.Tag.findOne({
      where: {
        id
      }
    })
    await tag.destroy()
    return ctx.helper.returnObj(0, '删除成功');
  }
}

module.exports = TagService;