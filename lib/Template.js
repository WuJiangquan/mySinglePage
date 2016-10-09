define(["lib/underscore","../web/Ajax"],function(underscore,Ajax){
	var underscoreObject = underscore || _ || window._;
	var ajax = new Ajax();
	var cacheTemplates = {};
	return function(){
		var me = this;
		this.loadTemplate = function(url,callback){
			var cacheTemplate = this.getCacheTemplate(url);
			if(cacheTemplate){
				this.loadTemplateSuccess(cacheTemplate,callback);
			}else{
				ajax.loadFile(url,function(template){
					me.cachTemplate(url,template);
					me.loadTemplateSuccess(template,callback);
				});
			}
		};
		
		this.loadTemplateSuccess = function(template,callback){
			if(callback && "function" == typeof callback){
				callback(template);
			}
		}
		
		this.cachTemplate = function(url,template){
			cacheTemplates[url] = template;
		}
		
		this.getCacheTemplate = function(url){
			return cacheTemplates[url];
		};
		
		this.parseTemplate = function(template,data){
			return underscoreObject.template(template || "")(data || null);
		};
	}
});