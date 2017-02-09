### 安装
项目地址：（使用`git clone`）

```shell
git clone https://github.com/leson1986/vue-patient.git
```

```bash
# 安装依赖模块
npm install

# 启动服务
npm run dev

# 发布代码
npm run build

```

### 开发

### 目录结构
<pre>
.
├── README.md
├── dist                     // 项目build目录
├── config                   // 环境变量和入口，出口配置
├── static                   // 静态资源目录
├── build                    // 项目的配置文件目录
│   ├── dev-server.js        // 开发的服务配置
│   ├── webpack-dev-conf.js  // 开发的Webpack 配置文件
│   ├── webpack-prod-conf.js // 生产的Webpack 配置文件
│   ├── webpack-base-conf.js // 基本的Webpack 配置文件
├── package.json             // 项目配置文件
├── src                      // 生产目录
│   ├── assets               // css js 和图片资源
│   ├── data                 // 数据文件
│   ├── components           // 各种组件
│   ├── views                // 各种页面
│   ├── directives           // 各种指令
│   ├── filters.js           // 各种过滤器
│   ├── router.js            // 路由配置
│   └── main.vue             // 根组件
│   └── app.js               // Webpack 预编译入口
├── index.html               // 项目入口文件
.
</pre>

### 更新记录
参看 [CHANGELOG.md](./CHANGELOG.md)

### 项目参考
参看 eteplus/vue-sui-demo  https://github.com/eteplus/vue-sui-demo

### 微信图片上传接口
1. SPA单页面应用，在html页面时，就开始获取openID，并全站只运行一次即可
2. SPA单页面应用，在调用微信图片上传接口时，要注册wx.config，在html时就必须要获取带有code与state参数的链接，某个组件（相当于页面）需要调用此接口时，注册一次wx.config（在安卓机（部分机型），出现不可知的原因，一次报签名无效，暂时尚未找到解决方案。如果有解决方案的大神，请赐教，谢谢！）
答疑：部分安卓机型因为“目前Android微信客户端不支持pushState的H5新特性”--官方解释，会导致签名失败。我的解决方案：每个上传图片接口的页面独立出来，与单页面应用混合使用
