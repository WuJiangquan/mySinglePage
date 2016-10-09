var Person = function(){
	
	this.name = "";
	this.age = 0;
	this.sex = "";
	
	this.getName = function(){
		return this.name;
	};
	
	this.resetName = function(name){
		this.name = name;
	};
}
Person.fields = {
	age :{
		type : "integer",
		validators : {
			presence : '年龄不能为空'
		}
	},
	name : {
		type : "string",
		length : "50",
		validator : {
			length : '名字的长度不能超过50个字',
			presence : '名字不能为空'
		}
	},
	sex : {
		type : "string"
	}
}