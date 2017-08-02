# vue-music

> A vue project for music（vue仿QQ音乐移动端官网）

##项目介绍

采用vue做的仿QQ音乐移动端官网，项目中涉及到了 vue2 , vuex , vue-router , mint-ui 等 ，比较适合 vue 初学者，可以深入了解vue的组件化编程思想，提高自己对vue的认识;

##项目结构

>项目主要放在src目录下，assets文件夹存放了要用的图片，components文件夹是主要的一些组件，pages是项目的页面，
router文件夹是项目的路由文件，store文件夹是项目的状态管理模块，APP.vue是整个项目的入口组件，main.js是整个项目的一些入口配置文件，整个项目入口时index.html文件

##项目说明

本项目适用于vue初学者，主要是学习vue一些常见的用法，深入理解vue框架的组件化编程思想，虽然项目不大，却包含了vue项目中常用的模块（vuex,vue-routre等）,帮助初学者更好的了解这些组件的用法

##项目展示

![](http://upload-images.jianshu.io/upload_images/6633377-85cca85345688a05.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/6633377-bd35457dfdd690ab.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/6633377-45863c4e860fa984.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


##项目补充

本项目的数据都是来源于QQ音乐的官方接口，因为涉及到跨域问题，暂时使用的是zepto中的jsonp去模拟请求，实际开发中推荐使用 axios ;

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
