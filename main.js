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

define("mainPage",["lib/Query","lib/Route"],function(query,route){
	var $pageHeader = query("#pageHeader");
	var $pageFooter = query("#pageFooter");
	var $viewContainer = query("#viewContainer");
	var mainPageInit = function(){
		var headerHeight = $pageHeader.height();
		var footerHeight = $pageFooter.height();
		var pageHeight = window.innerHeight;
		$viewContainer.css("min-height",pageHeight - headerHeight - footerHeight +'px');
	}
	
	var getCurrentRoute = function(){
		return route.getCurrentRoute();
	}
	var MainPageController = function(){
		this.$pageHeader = $pageHeader;
		this.$pageFooter = $pageFooter;
		this.$viewContainer = $viewContainer;
		this.$navBars = this.$pageHeader.find('.navBar');
		this.init = function(callback){
			mainPageInit();
			window.onresize = function(){
				mainPageInit();
			};
			
			this.$navBars.on("click",function(event,index,queryObject){
				queryObject.removeClass("current");
				queryObject.eq(index).addClass("current");
			});
			
			this.initTabBar();
		}
		
		this.initTabBar = function(){
			this.$navBars.removeClass("current");
			switch(getCurrentRoute()){
				case "index":{
					this.$navBars.eq(0).addClass("current");
				}break;
				case "product":{
					this.$navBars.eq(2).addClass("current");
				}break;
				case "aboutUs":{
					this.$navBars.eq(1).addClass("current");
				}break;
				case "userHelp":{
					this.$navBars.eq(3).addClass("current");
				}break;
				default:{
					this.$navBars.removeClass("current");
				}
			}
		}
	}
	return new MainPageController();
});
