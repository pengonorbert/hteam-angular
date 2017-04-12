'use strict';

// Declare app level module which depends on views, and components
var hTeamApp = angular.module('hTeamApp', [
    'ngRoute',
    'ngMessages',
    'ngMaterial',
    'ui.bootstrap',
    'restangular',
    'hTeamApp.version'
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider.otherwise({redirectTo: '/'});
    }]);
