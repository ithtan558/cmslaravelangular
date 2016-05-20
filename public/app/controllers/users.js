app.controller('UsersController', function($scope, $http, LINK_USER){
	$scope.save = function(id) {
		var url = LINK_USER + 'users/api/create';
		$http({
			method: 'POST',
			url: url,
			data: $param($scope.users),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function(response){
			console.log)(response);
		}).error(function(response){
			console.log)(response);
		})
	}
});