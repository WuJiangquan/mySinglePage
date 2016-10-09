define(['../Abstract'],function(Abstract){
	return function BaseController(parameters){
		Abstract.call(this);
		this.abstractMembers = [{
			memberName : 'init',
			memberType : 'function'
		}];
	}
});