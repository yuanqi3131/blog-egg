'user strict'
const Service = require('egg').Service;

class BaseService extends Service {
  get op() {
    return this.app.Sequelize.Op
  }
}

module.exports = BaseService