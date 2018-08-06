const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

//引入mogoose 和fs模块
const mongoose = require('mongoose')
const fs = require('fs')

//定义路由信息
//插入商品数据
router.get('/insetAllgoodsInfo', async (ctx) => {
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

//插入商品数据
router.get('/insetAllCategoryInfo', async (ctx) => {
  fs.readFile('./dataJSON/category.json', 'utf8', (error, data) => {
    data = JSON.parse(data)
    const Category = mongoose.model('Category')
    data.RECORDS.map((value, index) => {
      let newCategory = new Category(value);
      newCategory.save().then(() => {
        console.log('数据插入成功，请查看数据库')
      }).catch(error => {
        console.log('数据插入失败！')
      })
    })
  })
  ctx.body = '正在插入数据...'
})

//插入子类商品详情
router.get('/insetAllCategorySubInfo', async (ctx) => {
  fs.readFile('./dataJSON/category_sub.json', 'utf8', (error, data) => {
    data = JSON.parse(data)
    const CategorySub = mongoose.model('CategorySub')
    data.RECORDS.map((value, index) => {
      let newCategorySub = new CategorySub(value);
      newCategorySub.save().then(() => {
        console.log('数据插入成功，请查看数据库')
      }).catch(error => {
        console.log('数据插入失败！')
      })
    })
  })
  ctx.body = '正在插入数据...'
})


//**获取商品详情信息的接口
router.post('/getDetailGoodsInfo', async (ctx) => {
  try {
    let goodsId = ctx.request.body.goodsId
    const Goods = mongoose.model('Goods')
    console.log(goodsId)
    let result = await Goods.findOne({ ID: goodsId }).exec()
    ctx.body = { code: 200, message: result }
  } catch (error) {
    ctx.body = { code: 500, message: error }
  }
})

//**读取大类数据的接口 */
router.post('/getCategoryList', async (ctx) => {
  try {
    const Category = mongoose.model('Category')
    let result = await Category.find().exec()
    ctx.body = { code: 200, message: result }
  } catch (error) {
    ctx.body = { code: 500, message: error }
  }

})


/**读取小类的数据 */
router.post('/getCategorySubList', async (ctx) => {
  try {
    let cateoryId = ctx.request.body.categoryId
    // let cateoryId=1
    const CategorySub = mongoose.model('CategorySub')
    let result = await CategorySub.find({ MALL_CATEGORY_ID: cateoryId }).exec()
    ctx.body = { code: 200, message: result }
  } catch (error) {
    ctx.body = { code: 500, message: error }
  }

})

/**根据类别获取商品列表 */
router.get('/getGoodsListByCategorySubID', async (ctx) => {
  try {
    // let categorySubId = ctx.request.body.categorySubId  //子类别ID
    let categorySubId = '2c9f6c946077476a0160781eb392000d'
    let page = ctx.request.body.page  //当前页数
    let num = 10  //每页显示数量
    let start = (page - 1) * num  //开始位置

    const Goods = mongoose.model('Goods')
    let result = await Goods.find({ SUB_ID: categorySubId })
      .skip(start).limit(num).exec()
    ctx.body = { code: 200, message: result }
  } catch (error) {
    ctx.body = { code: 500, message: error }
  }
})

module.exports = router