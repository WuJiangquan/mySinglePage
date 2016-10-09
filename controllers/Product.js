define(["../lib/Query"],function($){
	return function(parameters,template){
		
		this.init = function(){
			
		};
		
		this.pageInit = function(){
			this.navAs = $(".productNav").find("a");
			this.navAs.on("click",function(event,index){
				var i = parseInt(index /2);
				var j = index %2;
				var scroll =740 + i*(835+610) + j*835 ;
				window.scrollTo(0,scroll);
			});
		};
		
		this.getInitDatas = function(){}
	}
});