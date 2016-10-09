define(["../lib/Query"],function(query){
	var $ = query;
	var Controller = function(parameters,template){
		var me = this;
		this.init = function(){
			
		};
		
		
		
		this.listenEvent = function(){
			this.appFunctionNavAs.on("mouseover",function(event,index){
				me.appFunctionNavAs.removeClass("current");
				me.appFunctionNavAs.eq(index).addClass("current");
				me.appPageListItems.addClass("hide");
				me.appPageListItems.eq(index).removeClass("hide");
			});
		}
		
		this.pageInit = function(){
			this.appFunctionNavAs = $("#appDetail").find("a");
			this.appPageListItems = $("#appPageContainer").find("li");
			this.listenEvent();
		};
		
		this.getInitDatas = function(){}
	}
	return Controller;
});