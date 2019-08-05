module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    avarter: {
      type: String // 头像
    },
    email: {
      type: String, // 邮箱
    },
    createTime: {
      type: Date // 创建时间
    },
    loginTime: {
      type: Date // 登录时间
    }
  });
  return mongoose.model('User', UserSchema);
};