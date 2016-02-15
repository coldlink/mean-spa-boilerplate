angular.module('meanSpaApp')
	.controller('DataCtrl', function($scope, Data) {
		$scope.message = 'This is the DataCtrl!';

		$scope.get = function () {
			Data.get()
				.success(function(response) {
					$scope.datas = response;
					console.log(response);
				})
				.error(function (err) {
					console.log(err);
				});
		};

		$scope.delete = function (data) {
			console.log(data);
			Data.delete(data._id)
				.success(function (response) {
					console.log(response);
					$scope.get();
				})
				.error(function (err) {
					console.log(err);
				});
		};

		$scope.create = function () {
			console.log($scope.newData);
			Data.create($scope.newData)
				.success(function (response) {
					console.log(response);
					$scope.newData = {};
					$scope.get();
				})
				.error(function (err) {
					console.log(err);
				});
		};

		$scope.get();
	});
