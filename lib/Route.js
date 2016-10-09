define(function(require, exports, module){
	var lastHash = ";";
	var ajax = null;
	var currentRouteconfig = null;
	var templateObject = null;
	var controllerObject = null;
	var getLocationParameter = function(parameterStr){
		var parameters = [];
		if(parameterStr){
			var parameterStrs = parameterStr.split('&');
			for(var i =0;i<parameterStrs.length;i++){
				var parameterObj = parameters.split('=');
				parameters.push({
					name : parameterObj[0],
					valie : parameterObj[1]
				})
			}
		}
		return parameters;
	}
	
	var loadTemplate = function(templateUrl,callback){
		if(templateUrl){
			if(templateObject == null){
				require(["lib/Template"],function(Template){
					templateObject = new Template();
					templateObject.loadTemplate(templateUrl,callback);
				});
			}else{
				templateObject.loadTemplate(templateUrl,callback);
			}
		}
	}
	
	var loadController = function(contrulerUrl,callback,template){
		if(contrulerUrl){
			if(controllerObject){
				controllerObject.loadController(contrulerUrl,callback,template);
			}else{
				require(["lib/Controller"],function(Controller){
					controllerObject = new Controller();
					controllerObject.loadController(contrulerUrl,callback,template);
				});
			}
			
		}
	}
	
	var changeHash = function(routeConfig,hash,parameters){
		var isHashconfig = false;
		for(config in routeConfig){
			if(config == hash){
				isHashconfig = true;
				var controllerUrl = routeConfig[config].controller;
				loadTemplate(routeConfig[config].templateUrl,function(template){
					loadController(controllerUrl,function(Controller,template){
						var controller = new Controller(template,parameters);
						controller.init();
						var datas = controller.getInitDatas();
						routeObject.renderTemplate(template,datas);
						controller.pageInit();
					},template);
				});
			}
		}
		if(!isHashconfig){
			skipToDefaultPage(routeConfig);
		}
	}
	
	
	var skipToDefaultPage = function(routeConfig){
		var defaultHash = "#/"+routeConfig.default;
		location.hash = defaultHash;
//		location.href = "http://baidu.com";
	}
	
	var parseDocumentSelector = function(selector){
		if("string"){
			selector = document.querySelector(selector) || "";
		}
		return selector;
	}
	
	var routeObject = {
		currentHash : "",
		parameters : "",
		pageChange : function(){
			var locationsHash = routeObject.getLocationHash();
			var hash = locationsHash[0].split('/')[1];
			
			this.parameters = getLocationParameter(locationsHash[1]);
			if(lastHash != hash || !lastHash){
				this.currentHash = hash;
				changeHash(currentRouteconfig,hash,this.parameters);
			}
		},
		config : function(routeConfig,callback){
			window.onhashchange = function(){
				routeObject.pageChange();
				if(callback && "function" == typeof callback){
					callback(routeObject.getLocationHash());
				}
			};
			currentRouteconfig = routeConfig;
			this.pageChange();
		},
		
		getLocationHash : function(){
			return window.location.hash.split('?')[0].split(':');;
		},
		
		getCurrentRoute : function(){
			return  this.getLocationHash()[0].split('/')[1];
		},
		
		renderTemplate : function(template,initData){
			if(templateObject){
				var html = templateObject.parseTemplate(template,initData);
				var containerSelector = currentRouteconfig[this.currentHash].container;
				var selector = parseDocumentSelector(containerSelector);
				selector.innerHTML = html;
			}
		}
	}
	return routeObject;
});