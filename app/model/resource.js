'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, UUID, UUIDV4 } = app.Sequelize;

  const Resource = app.model.define('resource', {
    id: { type: UUID, defaultValue: UUIDV4, primaryKey: true },
    aritcleId: INTEGER,
    userId: INTEGER,
    commentId: INTEGER,
    path: STRING(100),
    createTime: DATE
  }, {
    timestamps: false//去除createAt updateAt
  });
  Resource.associate = () => { // 表间关系
    app.model.Resource.belongsTo(app.model.Article, { foreignKey: 'aritcleId', targetKey: 'id' })
    app.model.Resource.belongsTo(app.model.User, { foreignKey: 'userId', targetKey: 'id' })
  }
  Resource.sync({ alter: true }) // 自动建表
  return Resource;
};