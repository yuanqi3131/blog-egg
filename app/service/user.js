const Service = require('../core/baseService');
const fs = require('fs');
const path = require('path');
//故名思意 异步二进制 写入流
const awaitWriteStream = require('await-stream-ready').write;
//管道读入一个虫洞。
const sendToWormhole = require('stream-wormhole');

class UserService extends Service {
  async index() {
    const { ctx } = this;
    let result = await ctx.model.User.findAll({
      include: [
        {
          model: ctx.model.Resource,
          attributes: ['id']
        },
        {
          model: ctx.model.Role,
          attributes: ['name']
        }
      ]
    });
    return ctx.helper.returnObj(0, '成功', result)
  }
  async login(userInfo) {
    const { ctx } = this;
    let res
    const result = await ctx.model.User.findOne({ //判断用户是否存在
      where: {
        username: userInfo.username
      }
    });
    if (!result) {
      res = ctx.helper.returnObj(-1, '用户不存在');
    } else {
      const result = await ctx.model.User.findOne({
        attributes: { exclude: ['password'] },
        where: {
          username: userInfo.username,
          password: userInfo.password
        }
      });
      if (!result) { // nModified为0 没有更改说明用户名密码不对 为1账号密码正确
        res = ctx.helper.returnObj(-1, '用户名账号密码错误');
      } else {
        userInfo.loginTime = new Date();
        await result.update({ loginTime: userInfo.loginTime });
        result.loginTime = userInfo.loginTime;
        let res1 = await ctx.model.User.findOne({
          include: [
            {
              model: ctx.model.Role,
              attributes: ['name']
            }
          ],
          where: {
            id: result.id
          }
        });
        ctx.session.userId = result.id
        res = ctx.helper.returnObj(0, '登录成功', res1);
      }
    }
    return res
  }
  async register(userInfo) {
    const { ctx } = this
    let res
    const result = await ctx.model.User.findOne({
<<<<<<< HEAD
      username: userInfo.username
=======
      where: {
        username: {
          [this.op.eq]: userInfo.username
        }
      }
>>>>>>> 初步完成后台
    })
    if (result) {
      // 用户已经被注册
      res = ctx.helper.returnObj(-1, '用户已经被注册');
    } else {
      // 注册
<<<<<<< HEAD
      userInfo.createTime = ctx.helper.handlerDate(new Date())
      const user = new ctx.model.User(userInfo)
      await user.save()
      // await ctx.model.User.save(userInfo)
=======
      userInfo.createTime = new Date()
      const user = await ctx.model.User.create(userInfo)
      if (userInfo.avatar) {
        await ctx.model.Resource.create({ path: userInfo.avatar, userId: user.id, createTime: new Date() })
      }
>>>>>>> 初步完成后台
      res = ctx.helper.returnObj(0, '注册成功');
    }
    return res
  }
<<<<<<< HEAD
=======
  async upload(stream) {
    const filename = Date.now() + path
      .extname(stream.filename)
      .toLocaleLowerCase();
    const target = path.join(this.config.baseDir, 'app/public/uploads', filename);
    const writeStream = fs.createWriteStream(target);
    try {
      //异步把文件流 写入
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      //如果出现错误，关闭管道
      await sendToWormhole(stream);
      throw err;
    }
    return filename
  }
  async destroy(id) {
    const { ctx } = this;
    let user = await ctx.model.User.findOne({
      where: {
        id
      }
    })
    await user.destroy()
    return ctx.helper.returnObj(0, '删除成功');
  }
>>>>>>> 初步完成后台
}
module.exports = UserService