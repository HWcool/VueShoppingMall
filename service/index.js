const koa = require('koa')
const app = new koa()
const mongoose = require('mongoose')
const cors = require('koa2-cors')
const {connect,initSchemas} = require('./database/init.js')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')



//开启跨域访问
app.use(bodyParser())
app.use(cors())

const user = require('./appAPI/User.js')
const goods = require('./appAPI/Goods')
//装载所有的子路由
let router = new Router()
router.use('/user',user.routes())
router.use('/goods', goods.routes())


//加载路由的中间件
app.use(router.routes())
app.use(router.allowedMethods())

//立即执行表达式
;(async ()=>{
    await connect()
    initSchemas()
    // const User = mongoose.model('User')
    // let firstUser = new User({userName:'hanjia02',password: '999999'})
    // firstUser.save().then(() =>{
    //   console.log('用户插入成功')
    // })
    // let users = await  User.findOne({}).exec()
    // console.log('**************')
    // console.log(users)
    // console.log('****************')
})()

//路由信息首页信息
app.use(async(ctx)=>{
  ctx.body="<h1>路由首页信息</h1>"
})

app.listen(3000,()=>{
  console.log('[Server] starting at port 3000')
});