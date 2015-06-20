/**
 * Created by jbz on 6/12/2015.
 */
angular.module('hintchirps')
    .controller('SignupController',['$scope', 'userModel', '$state', '$timeout', 'loggedIn', function($scope, userModel, $state, $timeout, loggedIn) {
    if (loggedIn === true)
        $state.go('dashboard');
    //todo - this logic should be enforced server side
    var signup = this;
    $scope.loggedIn = loggedIn;
    signup.password = '';
    signup.submit = function () {
        signup.error = '';
        if (signup.username) {
            if (!userModel.userExists(signup.username)) {
                if (signup.password.length > 5) {
                    if (signup.password === signup.passwordConfirm) {
                        userModel.signup(signup.username, signup.password);
                        signup.error = 'Success, you are logged in now!'

                        $timeout($state.go('dashboard'), 1500);
                    } else
                        signup.error = 'Passwords must match!'
                } else
                    signup.error = 'Password must be at least 6 characters!'
            } else
                signup.error = 'Username already taken!'
        } else
            signup.error = 'Enter a login name'
    }
}]);