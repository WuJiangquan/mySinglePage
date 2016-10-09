# mySinglePage
create single page website only use requirejs
## 下载
`git clone https://github.com/WuJiangquan/mySinglePage singlePage`

## 讲解
### 路由配置
    define(["lib/Route","mainPage"], function(route,mainPage) {
      mainPage.init();
      var moduleContainer = "#viewContainer";
      route.config({
        'index':{
          controller:'controllers/Index',
          templateUrl:'/static/guanwangApp/templates/index.html',
          container:moduleContainer
        },
        'aboutUs':{
          controller:'controllers/AboutUs',
          templateUrl:'/static/guanwangApp/templates/aboutUs.html',
          container:moduleContainer
        },
        'product':{
          controller:'controllers/Product',
          templateUrl:'/static/guanwangApp/templates/product.html',
          container:moduleContainer
        },
        'userHelp':{
          controller:'controllers/UserHelp',
          templateUrl:'/static/guanwangApp/templates/userHelp.html',
          container:moduleContainer
        },
        default : "index"
      },function(){
        mainPage.initTabBar();
      });
    });
    
    controller的路径是相对于配置文件文件的相对目录。而tempaltes是相对于后台根目录的路径。
    
### 路由实现原理
   在lib文件夹目录下有一个route.js文件，这个文件会返回一个对象，对象提供的config API 用来配置路由
   ,这个API被调用的同时也开始进行路由变化的监听。监听的原理是 window对象兼容hashchange时间，当事
   件被触发的时候，会根据url的hash 值跟配置的路由进行对比判断，再根据不同的路由加载不同的模板和控制器。

### 模板的加载、解析和渲染
   模板的加载和解析是通过lib目录下的Template.js 文件实现，该文件返回的是一个类，这个类提供了可供外部使用的
   loadTemplate、parseTempalte、cachTemplate、getCacheTemplate几个API。
   loadTemplate通过Ajax.js返回类的 loadFile API实现一步地下载模板。
   模板是underscore模板，所以解析的时候 parseTempalte 是使用了underscore的template方法执行。
   cachTemplate会在内存中存储这个模板，存储的对象是一个私有变量，所以要使用getCacheTemplate API获取
#### 说明：
这个类会在route对象中被调用，route有一个API renderTemplate是通过改变节点innerHTML来把模板渲染到页面上的

### 控制器的加载
  控制器用requirejs实现的，所以加载的时候比较简单，调用requireJs的按需加载API require([],function(){})实现按需加载
