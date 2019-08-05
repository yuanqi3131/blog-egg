'user strict'

module.exports = {
  /**
   * 
   * @param {*} code 返回状态码
   * @param {*} msg 返回信息
   * @param {*} data 返回对象
   */
  returnObj(code, msg, data = {}) {
    return {
      code,
      msg,
      data
    }
  },
  /**
   * 
   * @param {*} date 时间
   * @description 将时间处理成不同区时间
   */
  handlerDate(date) {
    let time = new Date(date)
    let a = new Date(time.setHours(time.getHours()))
    return new Date(time.setHours(time.getHours()))
  }
}