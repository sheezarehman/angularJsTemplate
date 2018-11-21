var app = angular.module("TestInnovela", []); 

app.controller("myController", function($scope) {
	console.log("toto");
    $scope.products = ["Milk", "Bread", "Cheese"];
});