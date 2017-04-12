/*
 *  Routing declarations
 */
hTeamApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/beers', {
        templateUrl: 'pages/beers/beers.html',
        controller: 'BeersController'
    });
}]);

/*
 *  View Controller
 */
hTeamApp.controller('BeersController', ['$scope', 'Restangular', function ($scope, Restangular) {
    $scope.listLoading = true;

    // Set the base URL from 'localhost' to 'https://api.punkapi.com/v2/'
    Restangular.setBaseUrl('https://api.punkapi.com/v2/');
    // Creating a Restangular object
    var beers = Restangular.all('beers');
    // Make the GET call on /beers
    beers.getList().then(function (data) {
        $scope.beerList = data.plain();
        $scope.listLoading = false;
    });

    // Remove a beer from the beer list.
    $scope.drinkBeer = function ( beerId ) {
        console.log('Drink beer with ID: ', beerId);
        for (var b = 0; b < $scope.beerList.length; b++) {
            if ($scope.beerList[b].id === beerId ) {
                $scope.beerList.splice(b, 1);
                break;
            }
        }
    };

}]);