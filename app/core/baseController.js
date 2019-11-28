const Controller = require('egg').Controller;

class BaseControll extends Controller {
  success(code = 0, msg = "success", data = {}) {
    this.ctx.body = {
      code,
      msg,
      data
    }
  }
  error(code = -1, msg = "") {
    this.ctx.body = {
      code,
      msg
    }
  }
}

module.exports = BaseControll;