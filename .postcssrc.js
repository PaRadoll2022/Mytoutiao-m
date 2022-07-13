// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 设计稿1rem的大小
      // vant组件库是根据37.5大小配置的
      //   rootValue: 37.5,
      //  动态设置rootValue
      // 如果是vant组件 就返回37.5
      // 不是就返回75
      rootValue: (module) => (/vant/gi.test(module.file) ? 37.5 : 75),
      // 适配的属性 表示所有属性单位都转化成rem单位
      propList: ['*']
    }
  }
}
