app.controller('contactController', function($scope) {
	$scope.email = "Please wait...";
	$scope.phone = "Please wait...";

	setTimeout(putEmail, 1000);

	function putEmail() {
		$scope.email = "mai";
		$scope.email += "l.com";
		$scope.email = "@g" + $scope.email;
		$scope.email = "drewmclees" + $scope.email;
		$scope.email = "an" + $scope.email;
		split = $scope.email.split("@");
		$scope.email = split[0] + "5@" + split[1]; 
		$scope.$apply();
	}

});