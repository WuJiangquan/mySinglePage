define([],function(){
	return function(parameters,template){
		this.init = function(){
			
		};
		
		this.pageInit = function(){
			var center=new qq.maps.LatLng(23.05722,113.406938902);
		    var map=new qq.maps.Map(document.getElementById("mapContainer"),{
		        center:center,
		        zoom:17
		    });
		    
		    var label = new qq.maps.Label({
		        position: center,
		        map: map,
		        content:'国家数字家庭基地'
		    });
		    //添加定时器
		    setTimeout(function(){
		        var marker=new qq.maps.Marker({
		            position:center,
					animation:qq.maps.MarkerAnimation.DROP,
		            map:map
		        });
		    },1000);
			
		};
		
		this.getInitDatas = function(){};
	}
});