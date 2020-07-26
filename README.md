# vue_elm
视频参考地址： （项目没写完整）
https://www.bilibili.com/video/BV1vE411871g?p=1

### 通过vue.config.js 修改webpack的默认配置
### 为开发模式与发布模式指定不同的打包入口
```
默认情况下，Vue项目的开发模式与发布模式，共用一个打包的入口文件（src/main.js）
为了将项目的开发过程与发布过程分离，可以各自指定打包的入口文件，即：
1.开发模式的入口文件： src/main-dev.js
2.发布模式的入口文件： src/main-prod.js
```
### 通过externals加载外部CDN资源
```
默认情况下，通过import语法导入的第三方依赖包，最终会被打包合并到同一个文件中，
从而导致打包成功后，单文件体积过大的问题。
为了解决上述问题，可以通过webpack的external是节点，来配置并加载外部的CDN资源，
凡是声明在external是中的第三方依赖包，都不会被打包。
```
### 路由懒加载
```
具体需要3步:
1.安装 @babel/plugin-syntax-dynamic-import 包
2.在babel.config.js配置文件中声明该插件
3.将路由改为按需加载的形式:
    const Foo = ()=>(/* webpackChunkName:"group-foo" */ './Foo.vue')
```

