//这是项目发布阶段需要用到的babel插件
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  // prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ...prodPlugins,  //发布产品时用到的插件数组
    // '@babel/plugin-syntax-dynamic-import'
  ]
}
