'use strict'

module.exports = app => {
  const { INTEGER } = app.Sequelize;
  const articleTag = app.model.define('articleTag', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    articleId: INTEGER,
    tagId: INTEGER
  }, {
    timestamps: false
  })
  articleTag.sync({ alter: true });

  return articleTag
}
