/**
 * Created by jbz on 6/12/2015.
 */
angular.module('hintchirps')
    .factory('userModel', function () {
        // NOT FOR PRODUCTION USE -- MOCK SERVER
        var users = [
            {username: 'bookbottles', password: 'showcase'}
        ];

        function userExists(user) {
            return (users.filter(function (i) {
                return (i.username === user)
            }).length > 0)
        }

        function signup(user, pass) {
            users.push({username: user, password: pass});
        }

        function login(user, pass) {
            return users.filter(function (i) {
                return (i.username === user && i.password === pass)
            });
        }

        return {
            userExists: userExists,
            signup: signup,
            login: login
        }
    })