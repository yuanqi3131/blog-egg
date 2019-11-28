'use strict';

const BaseController = require('../core/baseController');

let rule = {
  title: { type: 'string', required: true, message: '必填项' },
  content: { type: 'string', required: true, message: '必填项' },
  tagId: { type: 'int', required: true, message: '必填项' },
  isTop: { type: 'string', required: true, message: '必填项' },
  userId: { type: 'int', required: true, message: '必填项' },
}
class ImgController extends BaseController {
  async index() { // 查询标签列表
    const { ctx } = this;
    let id = ctx.query.id
    const result = await ctx.service.img.index(id);
    
    ctx.body = result;
  }
  // async create() {
  //   const { ctx } = this;
  //   let article = ctx.request.body
  //   await ctx.validate(rule, article); // 验证输入是否输入
  //   const result = await ctx.service.article.create(article)
  //   ctx.body = result
  // }
  // async destroy() { // 删除文章
  //   const { ctx } = this;
  //   const obj = ctx.request.body;
  //   const result = await ctx.service.article.destroy(obj.id);
  //   ctx.body = result;
  // }
}

module.exports = ImgController