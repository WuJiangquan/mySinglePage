# mySinglePage
create single page website only use requirejs
## 下载
`git clone https://github.com/WuJiangquan/mySinglePage singlePage`

## 讲解
### 配置路由
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

