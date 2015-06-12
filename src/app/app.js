var socket = io.connect('http://localhost:3444');
angular.module('bookbottles-showcase', [
    'ui.router',
    'templates-app'
])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // Configure states here
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'showcase/templates/home.tpl.html',
                controller: 'HomeController',
                controllerAs: 'home',
                resolve: {
                    loggedIn: function (userAuth) {
                        return userAuth.loggedIn();
                    }
                }
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'showcase/templates/signup.tpl.html',
                controller: 'SignupController',
                controllerAs: 'signup',
                resolve: {
                    loggedIn: function (userAuth) {
                        return userAuth.loggedIn();
                    }
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'showcase/templates/login.tpl.html',
                controller: 'LoginController',
                controllerAs: 'login',
                resolve: {
                    loggedIn: function (userAuth) {
                        return userAuth.loggedIn();
                    }
                }
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'showcase/templates/dashboard.tpl.html',
                controller: 'DashController',
                controllerAs: 'dash',
                resolve: {
                    loggedIn: function (userAuth) {
                        return userAuth.loggedIn();
                    },
                    onEnterFlag: function(){return true} // bc cant call controller func directly from state. . I think. .
                }
            });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    });