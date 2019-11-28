'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Article = app.model.define('article', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(100),
    tagId: INTEGER,
    userId: INTEGER,
    content: STRING(10000),
    isTop: INTEGER, // 0不置顶 1置顶
    createTime: DATE
  }, {
    timestamps: false//去除createAt updateAt
  });
  Article.associate = () => { // 表间关系
    app.model.Article.belongsToMany(app.model.Tag, {
      foreignKey: 'articleId',
      through: app.model.ArticleTag,
    });
    app.model.Article.belongsTo(app.model.User, { targetKey: 'id', foreignKey: 'userId' });
    app.model.Article.hasMany(app.model.Resource, { targetKey: 'id', foreignKey: 'aritcleId' });
  }
  Article.sync({ alter: true }) // 自动建表
  return Article;
};