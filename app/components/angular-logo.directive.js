'use strict';

hTeamApp.directive('angularLogo', function () {

        return {
            restrict: 'E',
            scope: {},
            template: '<div class="angular_logo"><h1><a ng-href="/#/">HTeam - Angular app</a></h1></div>',
            link: function (scope) {
               console.warn('Angular-logo directive initialized!');
            }
        };

    });