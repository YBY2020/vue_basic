module.exports = {
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },
	lintOnSave:false, //关闭语法检查
	//开启代理服务器（方式一）这种方式只能配置一个目标服务器而且不能灵活的控制到底走不走代理   也就是代理里本身有的就不会往服务器要了
	/* devServer: {
    proxy: 'http://localhost:5000'
  }, */
	//开启代理服务器（方式二）
	devServer: {
    proxy: {
      '/atguigu': {//请求前缀   灵活控制走不走代理  想走的话就在请求的8080后面加上/atguigu(强制转发给5000)
        target: 'http://localhost:5000',
				pathRewrite:{'^/atguigu':''},//路径重定向   把/atguigu替换掉
        // ws: true, //用于支持websocket  不细说了
        // changeOrigin: true //用于控制请求头中的host值    就是说谎  骗服务器跟他一样是5000   但是说不说谎5000都会给你信息
      },
      '/demo': {
        target: 'http://localhost:5001',
				pathRewrite:{'^/demo':''},
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      }
    }
  }
}