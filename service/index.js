const koa = require('koa')
const app = new koa()
const mongoose = require('mongoose')
const {connect,initSchemas} = require('./database/init')
const Router = require('koa-router')
const user = require('./api/User')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')

let router = new Router();
router.use('/user',user.routes())

app.use(router.routes())
app.use(router.allowedMethods())
app.use(bodyParser())
app.use(cors())

;(async ()=>{
    await connect()
    initSchemas()
    const User = mongoose.model('User')
    let firstUser = new User({userName:'hanjia',password: '999999'})
    firstUser.save().then(() =>{
      console.log('用户插入成功')
    })
    let users = await  User.findOne({}).exec()
    console.log('**************')
    console.log(users)
    console.log('****************')
})()

app.use(async(ctx)=>{
    ctx.body = "<h1>hello,world";
})

app.listen(3000,()=>{
  console.log('[Server] starting at port 3000')
});