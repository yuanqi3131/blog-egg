'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Tag = app.model.define('tag', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    createTime: DATE
  }, {
    timestamps: false//去除createAt updateAt
  });
  // Tag.associate = () => { // 表间关系
  //   app.model.Tag.belongsToMany(app.model.Article, {
  //     foreignKey: 'tagId',
  //     through: app.model.ArticleTag,
  //   })
  // }
  Tag.sync({ alter: true });
  return Tag;
};