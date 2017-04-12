/*
 *  Routing declarations
 */
hTeamApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/home/home.html',
        controller: 'HomeController'
    });
}])

/*
 *  Home Controller
 */
    .controller('HomeController', ['$scope', function ($scope) {
        console.log('HomeController loaded! (this could control the nav menu bar)');
    }]);