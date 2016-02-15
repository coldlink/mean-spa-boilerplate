angular.module('meanSpaApp')
	.factory('Data', function($http) {
		return {
			get: function() {
				return $http.get('/api/datas');
			},
      create: function (newData) {
        return $http.post('/api/datas', newData);
      },
      delete: function (id) {
        return $http.delete('/api/datas?id=' + id);
      }
		};
	});
