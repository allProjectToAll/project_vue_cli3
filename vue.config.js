module.exports = {
  devServer: {
    port: 8080, // 端口号
    host: "localhost",
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {// 配置多个代理
      "/dev": {
        target: "https://movie.querydata.org",    // 后台接口域名
        ws: true,           //如果要代理 websockets，配置这个参数
        secure: false,      // 如果是https接口，需要配置这个参数
        changeOrigin: true,  //是否跨域
        pathRewrite:{       //表示的意思是 把/api 替换为 空,那么我的请求地址就为 http://45.105.124.130:8081/xxxx/xxx, 接口中："api/getdata",使用 api+具体接口路径
          '^/dev':''
        }
      },
      "/pro": {
        target: "https://movie.querydata.org",    // 后台接口域名
        ws: true,           //如果要代理 websockets，配置这个参数
        secure: false,      // 如果是https接口，需要配置这个参数
        changeOrigin: true,  //是否跨域
        pathRewrite:{       //表示的意思是 把/api 替换为 空,那么我的请求地址就为 http://45.105.124.130:8081/xxxx/xxx, 接口中："api/getdata",使用 api+具体接口路径
          '^/pro':''
        }
      }
    } 
  },
  lintOnSave: false // 关闭eslint代码检查
};