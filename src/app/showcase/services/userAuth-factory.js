/**
 * Created by jbz on 6/12/2015.
 */
angular.module('hintchirps')
    .factory('userAuth', ['$cacheFactory', '$state', function ($cacheFactory, $state) {
        var userAuth = $cacheFactory('cacheId');
        userAuth.loggedIn = function () {
            return userAuth.get('session');
        };
        userAuth.logIn = function () {
            userAuth.put('session', true);
            return true;
        };
        userAuth.signOut = function () {
            userAuth.put('session', false);
            $state.go('login');
            return true;
        };
        return userAuth;
    }])
