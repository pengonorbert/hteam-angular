hTeamApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/todos', {
        templateUrl: 'pages/todos/todos.html',
        controller: 'TodosController'
    });
}]);

hTeamApp.controller('TodosController', ['$scope', function ($scope) {
    // Initializations
    $scope.priorities = [
        {priority: 1, label: 'meh...'},
        {priority: 2, label: 'see ya later'},
        {priority: 3, label: 'would not be so bad to do'},
        {priority: 4, label: 'kind of important'},
        {priority: 5, label: 'i am scared'},
        {priority: 6, label: '(╯°□°）╯︵ ┻━┻'},
    ];
    $scope.todos = [
        {id: 1, label: 'Elmenni a Malátába...', priority: '5', done: false},
        {id: 2, label: 'Kikérni egy kávét', priority: '1', done: false},
        {id: 3, label: 'Inni egy sört', priority: '3', done: false},
        {id: 4, label: 'Meg még egyet', priority: '3', done: false},
        {id: 5, label: 'Két sör után hazamenni', priority: '6', done: false},
    ];
    $scope.todoIndex = $scope.todos.length + 1;
    $scope.doneTodos = [];

    // Some functions
    $scope.addTodo = function (todo) {
        if (todo !== undefined) {
            todo.id = $scope.todoIndex;
            todo.done = false;

            $scope.todoIndex++;
            $scope.todos.push(todo);
            $scope.todoModel = {};
        }
    };

    $scope.$watch('todos', function (newValue) {
        for (var index = 0; index < $scope.todos.length; index++) {
            if ($scope.todos[index].done) {
                $scope.doneTodos.push($scope.todos[index]);
                $scope.todos.splice(index, 1);
            }
        }
    }, true);

}]);