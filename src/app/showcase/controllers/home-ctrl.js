/**
 * Created by jbz on 6/12/2015.
 */
angular.module('bookbottles-showcase')
    .controller('HomeController', function ($scope, loggedIn) {
        $scope.loggedIn = loggedIn;
    });