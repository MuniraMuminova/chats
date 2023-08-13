const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  publicPath : '/chats/',
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      alias:{
        '@scr': path.join(__dirname, 'scr')
      }
    }
  }
})
