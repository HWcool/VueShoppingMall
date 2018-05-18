# 基于Vue.js开发的移动端商城app

``` bash
用到的技术内容简介：
webpack脚手架工具
数据驱动框架： vue.js
路由： vue-router
ajax: axios
UI： vant有赞 https://www.youzanyun.com/zanui
模拟数据： ease-mock.js
屏幕适配： flexible.js
画面布局方式：flex
css后处理： postcss
```

## 说明
``` bash
 主要目的是把自己学的东西整合一下，尝试做一个以vue.js作为数据框架的商城项目，功能正在逐步完善中。
 欢迎提意见和start!!
```

## 项目结构
<pre>

│  .gitattributes
│  .gitignore               # 忽略无需git控制的文件  比如 node_modules
|  build                    #webpack环境配置文件
│  config                   #webpack环境配置文件
|  src                      #主web项目目录
│  static                   # 静态文件目录
│  index.html               # 首页模板
│  package.json             # 项目配置
│  README.md                # 项目说明
│  webpack.config.js        # webpack 配置文件
│
| 主要文件
├─src
│  |  assets/images         # 静态文件
│  │  css                   # css文件
│  |  components            # 组件
|  |  common                # 公用样式及封装的js工具函数
|  |  component             # 页面组件
|  |  components/pages      # 页面
│  │  router                # 路由配置文件夹
│  │  App.vue               # 主vue
│  │  main.js               # vue初始化配置文件

</pre>


## 运行步骤
``` bash
#github仓库url
git clone https://github.com/HWcool/SmileVueApp.git
```

``` bash
npm install
安装依赖

```

``` bash
npm run dev   ----- localhost:8088
npm run build ----- 打包项目
```