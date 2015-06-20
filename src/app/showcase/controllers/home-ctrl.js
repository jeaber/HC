/**
 * Created by jbz on 6/12/2015.
 */
angular.module('hintchirps')
    .controller('HomeController',['$scope', 'loggedIn', function ($scope, loggedIn) {
        $scope.loggedIn = loggedIn;
    }]);