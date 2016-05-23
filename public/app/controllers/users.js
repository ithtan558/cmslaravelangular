app.controller('UsersController', function($scope, $http, LINK_USER){
	$scope.alertSuccess = false;
	$scope.alertError = false;
	$scope.save = function(id) {
		var url = LINK_USER + 'create';
		$http({
			method: 'POST',
			url: url,
			data: $.param($scope.user),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function(response){
			if(response.result == 1) {
				$scope.alertSuccess = true;
				$scope.alertError = false;
				$scope.textSuccess = response.data;
			}
			else {
				$scope.alertError = true;
				$scope.alertSuccess = false;
				$scope.textError = response.data;
			}
		}).error(function(response){
			console.log(response);
		})
	}
});