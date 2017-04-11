'use strict';

angular.module('hTeamApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'view/home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope', function ($scope) {
        console.log('Stage Controller loaded!');

        $scope.currentNavItem = 'page1';

        $scope.bookmarks = [
            {title: "Facebook", url: "www.facebook.com", icon: "brr24klck5.jpg"},
            {title: "Google", url: "www.google.com", icon: "brr24klck5.jpg"},
            {title: "Reddit - Formula1", url: "www.reddit.com/r/formula1", icon: "brr24klck5.jpg"}
        ];

    }]);