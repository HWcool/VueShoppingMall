const koa = require('koa')
const app = new koa()
const Router = require('koa-router')
let router = new Router()

const mongoose = require('mongoose')
const fs = require('fs')

//读取数据

router.get('/insertAllGoodsInfo', async(ctx)=>{
  //fs模块读取json文件
  fs.readFile('../dataJSON/newGoods.json','utf8',function(error,data) {
    data = JSON.parse(data)
    let saveCount = 0
    const goods = mongoose.model('Goods')
    data.map((value,index)=> {
      console.log(value)
      let newGoods = new goods(value)
      newGoods.save().then(()=>{
        saveCount++
        console.log()
      })
  })
})
