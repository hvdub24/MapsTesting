// Code goes here

/*
var mockDataForThisTest = "json=" + encodeURI(
    JSON.stringify([
    {
        name: "Dave",
        email: "dave@gmail.com",
        option: "Home",
        number: "1234567890"
    },
    {
        name: "John",
        email: "jon@gmail.com",
        option: "Home",
        number: "1234567890"
    }
]));*/

var app = angular.module('angularApp', []);

app.controller('MainCtrl', function($scope, $http) {

    $scope.choices = [];
    
    loadChoices();
    
    function loadChoices() {
        var httpRequest = $http({
            method: 'GET',
            url: './example.json'
            //data: mockDataForThisTest

        }).then(function(response) { //success(function(data, status) {
            // use then --> newer syntax
            console.log(response.data);
            $scope.choices = response.data;
        });
    };

    $scope.addNewChoice = function() {
        var newItemNo = $scope.choices.length + 1;
        $scope.choices.push({
            'id': 'choice' + newItemNo
        });
    };

    $scope.removeChoice = function(index) {
        //var lastItem = $scope.choices.length - 1;
        $scope.choices.splice(index, 1); //lastItem);
    };

});