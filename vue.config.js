// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
// transpileDependencies: true,
// lintOnSave:false,
// })

const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-pxtorem')({
              rootValue: 37.5, // base 
              unitPrecision: 2,//decimal save
              selectorBlackList: ['.wu'], // ignore regular form
              propList: ['*'],
              minPixelValue: 2,

            })
          ]
        },
      },
    },
  },
  lintOnSave:false,

  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
}
