const mongoose = require('mongoose')
const db = "mongodb://localhost/simle-db"
const glob = require('glob')
const {resolve} = require('path')

mongoose.Promise = global.Promise

exports.initSchemas = () =>{
  glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
}

exports.connect = () => {
  //连接数据库
  mongoose.connect(db)

  let maxConnectTimer = 0
  return new Promise((resolve, reject) => {
    //增加数据库连接的事件监听
    mongoose.connection.on('disconnected', () => {
      console.log('****数据库链接错误');
      if (maxConnectTimer < 3) {
        maxConnectTimer++
        //进行重连
        mongoose.connect(db)
      } else if (maxConnectTimer >= 3) {
        reject();
        throw new Error('数据库处理错误，请联系开发人员处理');
      }
    })

    //数据库出现错误的时候
    mongoose.connection.on('error', err => {
      console.log('****数据库链接错误');
      if (maxConnectTimer < 3) {
        maxConnectTimer++
        //进行重连
        mongoose.connect(db)
      } else if (maxConnectTimer >= 3) {
        reject();
        throw new Error('数据库处理错误，请联系开发人员处理');
      }
    })

    //链接打开的时候
    mongoose.connection.once('open', () => {
      console.log('MongoDB Connected successfully!')
      resolve();
    })

  })
}