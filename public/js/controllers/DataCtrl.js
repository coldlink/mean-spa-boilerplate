angular.module('meanSpaApp')
	.controller('DataCtrl', function($scope, Data) {
		$scope.message = 'This is the DataCtrl!';

		Data.get()
      .success(function(response) {
        $scope.datas = response;
        console.log(response);
		  })
      .error(function (err) {
        console.log(err);
      });
	});
