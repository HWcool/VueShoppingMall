const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

//引入mogoose 和fs模块
const mongoose = require('mongoose')
const fs = require('fs')

//定义路由信息
router.get('/insetAllgoodsInfo', async(ctx) => {
  //使用fs模块地区文件
  //这里的路径是因为是在index下执行的，所以是相对于index.js文件的
  fs.readFile('./dataJSON/newGoods.json', 'utf8', (error, data) => {
    //先把data解析成对象形式
    data = JSON.parse(data)
    //声明一个变量来记录插入的数据
    let saveCount = 0;
    //引入模型
    const Goods = mongoose.model('Goods')
    //遍历数据插入数据库
    data.map((value, index) => {
      //用模型对象生成数据，保存
      let newGoods = new Goods(value);
      newGoods.save().then(() => {
        saveCount++
        console.log('成功插入了' + saveCount + '条数据')
      }).catch(error => {
        console.log('失败：' + error)
      })
    })
  })
  ctx.body = '正在插入数据...'
})

module.exports = router
