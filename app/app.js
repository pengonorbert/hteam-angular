'use strict';

// Declare app level module which depends on views, and components
var hTeamApp = angular.module('hTeamApp', [
    'ngRoute',
    'ngMessages',
    'ngMaterial',
    'ui.bootstrap',
    'hTeamApp.view1',
    'hTeamApp.view2',
    'hTeamApp.version',
    'hTeamApp.home'
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider.otherwise({redirectTo: '/'});
    }])

    .controller('hTeamAppCtrl', ['$scope', function ($scope) {
        $scope.currentNavItem = 'page1';
    }]);
