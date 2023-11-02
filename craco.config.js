const path = require('path')
const CracoLessPlugin = require('craco-less');
//拼接路径函数
const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {  },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // webpack
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils")
    }
  }
}

// npm install @craco/craco@alpha -D  我们react script版本太高，只能用alpha版本
// 在 package.json配置craco 启动
// less处理
// npm install craco-less@2.1.0-alpha.0