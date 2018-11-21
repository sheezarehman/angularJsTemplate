app.controller('myController', myController);
myController.$inject = ['$rootScope', '$scope','APIService'];
function myController($rootScope,$scope , APIService) {
	console.log("toto");
    $scope.products = ["Milk", "Bread", "Cheese"];

    var query = APIService.query(function (response) {
    		console.log(response);
    });

    var param = {
    	'user' : "sheeza",
    	'age' : 23
    }

    /*var update = APIService.update( params , function (response) {
    		console.log(response);
    });*/
};