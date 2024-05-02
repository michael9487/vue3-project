const { defineConfig } = require("@vue/cli-service");
//特性標誌以使用element-plus
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  //以下為使用GitHub Pages
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/vue3-project/" // 替换 'your-repository-name' 为你的 GitHub 仓库名
      : "/",
  //以下為添加的特性標誌
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
        // 添加其他需要的特性標誌
      }),
    ],
  },
});
