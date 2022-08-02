const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use("i18n")
        .loader("@intlify/vue-i18n-loader")
        .end();
  } , 
  // configureWebpack: {
  //   plugins: [
  //     new MyAwesomeWebpackPlugin()
  //   ]
  // }
  
  
})
