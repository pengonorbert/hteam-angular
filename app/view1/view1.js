'use strict';

angular.module('hTeamApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function () {
        this.bookmarks = [
            {title: "Facebook", url: "www.facebook.com", icon: "brr24klck5.jpg"},
            {title: "Google", url: "www.google.com", icon: "brr24klck5.jpg"},
            {title: "Reddit - Formula1", url: "www.reddit.com/r/formula1", icon: "brr24klck5.jpg"}
        ];

        for (var i = 0; i < this.bookmarks.length; i++) {
            if (this.bookmarks.length == i) {
                console.log('Valamit irj ki pls');
            }
        }
    }]);