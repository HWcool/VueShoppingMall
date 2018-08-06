const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
//引入bcrypy
const bcrypt = require('bcrypt')
//定义密码算法强度
const SALT_WORK_FACTOR = 10

//创建Schema
const userSchema = new Schema({
  UserId: { type: ObjectId },
  userName: { unique: true, type: String },
  password: String,
  createAt: { type: Date, default: Date.now() },
  lastLoginAt: { type: Date, default: Date.now() }
}, {
    collection: 'user'
  })

//每次存储数据时都要执行 加盐加密操作
userSchema.pre('save', function (next) {
  //let user = this
  console.log(this)
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err)
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err)
      this.password = hash
      next()
    })
  })
})

//校验用户名、密码
userSchema.methods = {
  //密码对比方法
  comparePassword: (_password, password) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(_password, password, (err, isMatch) => {
        if (!err) resolve(isMatch)
        else reject(err)
      })
    })
  }
}

//发布模型
mongoose.model('User', userSchema);