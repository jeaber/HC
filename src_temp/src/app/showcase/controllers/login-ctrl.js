/**
 * Created by jbz on 6/12/2015.
 */
angular.module('bookbottles-showcase')
    .controller('LoginController',['$scope', 'userModel', '$state', 'userAuth', 'loggedIn', function($scope, userModel, $state, userAuth, loggedIn) {
        if (loggedIn === true)
            $state.go('dashboard');
        $scope.loggedIn = loggedIn;
        this.submit = function () {
            var userObject = userModel.login(this.username, this.password);
            if (userObject.length === 1) {
                userAuth.logIn();
                $state.go('dashboard');
            } else
                this.message = 'Incorrect username or password.'
        }
    }]);