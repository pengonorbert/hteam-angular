'use strict';

hTeamApp.directive('angularLogo', function () {

        return {
            restrict: 'E',
            scope: {},
            template: '<div class="angular_logo"><h1>HTeam - Angular app</h1></div>',
            link: function (scope) {
               //scope.siteTitle = 'HTeam - Angular alapok';

            }
        };

    });