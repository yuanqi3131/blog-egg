const Service = require('egg').Service;
class ArticleService extends Service {
  async index(id) {
    const { ctx } = this;
    let result
    if (id) {
      result = await ctx.model.Article.findOne({
        include: [{
          model: ctx.model.User
        }, {
          model: ctx.model.Tag
        }],
        where: {
          id
        }
      })
    } else {
      result = await ctx.model.Article.findAll({
        include: [{
          model: ctx.model.User
        }, {
          model: ctx.model.Tag
        }]
      })
    }
    return ctx.helper.returnObj(0, '成功', result)
  }
  async create(article) {
    const { ctx } = this;
    article.createTime = new Date();
    const newArticle = new ctx.model.Article(article)
    await newArticle.save()
    let res = ctx.helper.returnObj(0, '添加文章成功');
    return res
  }
  async destroy(id) {
    const { ctx } = this;
    let article = await ctx.model.Article.findOne({
      where: {
        id
      }
    })
    await article.destroy()
    return ctx.helper.returnObj(0, '删除成功');
  }
}

module.exports = ArticleService;