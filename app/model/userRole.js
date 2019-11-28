'use strict'

module.exports = app => {
  const { INTEGER } = app.Sequelize;
  const userRole = app.model.define('userRole', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER,
    roleId: INTEGER
  }, {
    timestamps: false
  })

  userRole.sync({ alter: true });
  return userRole
}
