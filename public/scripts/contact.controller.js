app.controller('contactController', function($scope) {
	$scope.email = "Please wait...";
	$scope.phone = "Please wait...";

	setTimeout(putEmail, 2000);
	setTimeout(putPhone, 2000);

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

	function putPhone() {
		x = 3;
		$scope.phone = "(" + ((3 * 100) + (2 * 2 * 2.5)) + ") " + ((120 * 3) + 20 + 100  + (3 * x)) + "-" + ((3500 * 2) + (10 * 5 * 3 * 2) + (5 * 5 * 3) - 25);
		$scope.$apply();
	}
});