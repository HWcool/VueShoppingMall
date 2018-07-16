const koa = require('koa')
const app = new koa()
const {connect} = require('./database/init.js') 

;(async ()=>{
    await connect()
})()

app.use(async(ctx)=>{
    ctx.body = "<h1>hello,world";
})

app.listen(3000,()=>{
    console.log('koa is ok');
});