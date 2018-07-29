//引入node的fs模块
const fs = require('fs')

//fs读入json文件并处理
fs.readFile('./goods.json', 'utf8', function (error, data) {
  //把json解析成对象形式
  let objData = JSON.parse(data)
  //声明一个存贮的数组
  let handledData = []
  //用来记录生成了多少条数据
  let i = 0
  objData.RECORDS.map((value, index)=> {
    if (value.IMAGE1 != null) {
      i++
      handledData.push(value)
    }
  })
  console.log('一共添加了'+ i + '条数据')

  //把处理完的数据写到本地
  fs.writeFile('./newGoods.json', JSON.stringify(handledData), function (err) {
    if (err) console.log('文件写入失败，请检查代码！')
    else console.log('文件写入成功!')
  })
})