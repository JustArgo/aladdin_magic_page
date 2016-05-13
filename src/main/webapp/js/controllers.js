var app = angular.module("app",[]);
app.controller("myCtrl",function($scope){
	$scope.items = [];
	$scope.colunm = 1;
	$scope.line = 1;
	var number = $scope.column*$scope.line;
	
	$scope.alert = function(){
		$scope.items = [];
		for(var i=0;i<$scope.column*$scope.line;i++){
			$scope.items.push({
				num:i+1,
				width:270/$scope.column +"px",
				height:270/$scope.line +"px"
			});	
		};
	};

	$scope.border = function(){
		var border = "border:10px solid";
		return border;
	}
});
