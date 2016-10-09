define([],function(){
	var Ajax = function(){
		var me = this;
		
		this.createHttpRequestObject = function(){
			if(window.XMLHttpRequest){
				return new XMLHttpRequest();
			}else if(window.ActiveXObject){
				try{
					return new ActiveXObject("Msxm12.XMLHTTP");
				}catch(e){
					try{
						return new ActiveXObject("Microsoft.XMLHTTP");
					}
					catch(e){
						
					}
				}
			}
			return null;
		};
		
		this.request = this.createHttpRequestObject();
		
		this.processRespone = function(callBack){
			if(me.request.readyState == 4){
				if(me.request.status == 200){
					var response = me.request.responseText;
					if('string' == typeof response){
						response = JSON.parse(response);
					}
					callBack(response);
				}
			}
		};
		
		this.parseParmeter = function(obj){//子元素是对象的情况尚未考虑
			var newParameter = '';
			for(var element in obj){
				obj[element] = encodeURIComponent(obj[element]);
				newParameter += element+'=' + obj[element]+'&';
			};
			return newParameter.substring(0,newParameter.length - 1);	
		};
		
		this.post = function(url,parameter,callback){
			var parameterStr = this.parseParmeter(parameter);
			if(!this.request){
				this.request = this.createHttpRequestObject();
			}
			this.request.onreadystatechange = function(respone){
				me.processRespone(callback);
			};
			this.request.open("POST",url,true);
			this.request.setRequestHeader('Content-Type',"application/x-www-form-urlencoded");
			this.request.send(parameterStr);
		};
		
		this.get = function(url,callback,parameter){
			var parameterStr = parameter?this.parseParmeter(parameter):"";
			if(!this.request){
				this.request = this.createHttpRequestObject();
			}
			this.request.onreadystatechange = function(respone){
				me.processRespone(callback);
			};
			if("" == parameterStr){
				this.request.open("GET",url,true);
			}else{
				this.request.open("GET",url+"?"+parameterStr,true);
			}
			this.request.send(null);
		};
		
		this.loadFile = function(url,callback){
			var xhr = this.request;
			xhr.onload = function() {
				if(callback && "function" == typeof callback){
					callback(this.response);
				}
			}
			xhr.open("GET", url);
			xhr.responseType = "text";
			xhr.send();
		}
	};
	
	return Ajax;
});