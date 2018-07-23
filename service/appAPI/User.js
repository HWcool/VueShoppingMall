const Router = require('koa-router')
const mongoose = require('mongoose')

let router = new Router()
router.get('/', async (ctx) => {
  ctx.body = "这是用户操作首页"
})

router.post('/register', async (ctx) => {
  console.log(ctx.request.body)
  ctx.body = ctx.request.body
})


module.exports = router