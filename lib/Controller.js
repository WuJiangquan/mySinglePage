define(['lib/Template'],function(template){
	var cachControllers = {};
	return function(){
		var me = this;
		this.loadController = function(contrulerUrl,callback,template){
			var Controller = this.getCacheController(contrulerUrl);
			if(Controller){
				this.loadControllerSuccess(Controller,callback,template);
			}else{
				require([contrulerUrl],function(Controller){
					if(callback && "function" == typeof callback){
						me.cacheController(contrulerUrl,Controller);
						me.loadControllerSuccess(Controller,callback,template);
					}
				})
			}
		};
		
		this.loadControllerSuccess = function(Controller,callback,template){
			if(callback && 'function' == typeof callback){
				callback(Controller,template);
			}
		}
		
		this.getCacheController = function(url){
			return cachControllers[url];
		};
		
		this.cacheController = function(url,Controller){
			cachControllers[url] = Controller;
		}
		
		this.resetContaoller = function(){
			
		};
	}
});