(function(){
'use strict'

angular.module("myapp", [])
.controller('controller1', controller1)



function controller1() {
	var ctrl1=this;
	ctrl1.name='To the moon'
};

})();