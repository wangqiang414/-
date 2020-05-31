module.exports = {
  lintOnSave:false, // 关闭eslint语法检查
  // lintOnSave:'warning', // 只是输出提示的警告信息
  css: {
    loaderOptions: {
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          require('postcss-px2rem')({
            remUnit: 100, // 1rem等于多少px
          })
        ]
      }
    }
  }
}
