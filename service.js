app.factory('APIService',  function($http){
     var APIResource = $resource("https://jsonplaceholder.typicode.com/todos/1", null, {
        save: {method:'POST', isArray:false},
        query: {method:'GET', isArray:true},
        update: { method:'PUT' }
    });

    return APIResource;

    /*
studentApp.factory('studentSession', function($http){
    return {
        getSessions: function() {
            return $http.post('/services', { 
                type : 'getSource',
                ID    : 'TP001'
            });
        }
    };
});

studentApp.controller('studentMenu',function($scope, studentSession){
    $scope.variableName = [];

    var handleSuccess = function(data, status) {
        $scope.variableName = data;
        console.log($scope.variableName);
    };

    studentSession.getSessions().success(handleSuccess);
});
    */
});