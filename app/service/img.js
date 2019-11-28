const Service = require('egg').Service;
const fs = require('fs')

class ImgService extends Service {
  async index(id) {
    const { ctx } = this;
    let result = await ctx.model.Resource.findOne({
      where: {
        id
      }
    })
    return fs.createReadStream(this.config.baseDir + '/app' + result.path)
  }
  // async create(article) {
  //   const { ctx } = this;
  //   article.createTime = new Date();
  //   const newArticle = new ctx.model.Article(article)
  //   await newArticle.save()
  //   let res = ctx.helper.returnObj(0, '添加文章成功');
  //   return res
  // }
  // async destroy(id) {
  //   const { ctx } = this;
  //   let article = await ctx.model.Article.findOne({
  //     where: {
  //       id
  //     }
  //   })
  //   await article.destroy()
  //   return ctx.helper.returnObj(0, '删除成功');
  // }
}

module.exports = ImgService;