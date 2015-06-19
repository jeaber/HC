(function () {
    //var socket = io.connect('http://localhost:3444');
    angular.module('hintchirps', [
        'ui.router',
        'templates-app'
    ])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $urlRouterProvider.when("", "/");

                // For any unmatched url, send to /route1
                $urlRouterProvider.otherwise("/");

                // Configure states here
                $stateProvider
                    .state('home', {
                        abstract: true,
                        url: '/',
                        templateUrl: 'showcase/templates/home.tpl.html',
                        controller: 'HomeController',
                        controllerAs: 'home'
                    })
/*                    .state('home.default', {
                        url: '/default',
                        templateUrl: 'showcase/templates/home.default.html'
                    });*/
                    .state('signup', {
                        url: '/login',
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
                        templateUrl: 'showcase/templates/intro/dashboard.tpl.html',
                        controller: 'DashController',
                        controllerAs: 'dash',
                        resolve: {
                            /*loggedIn: function (userAuth) {
                                return userAuth.loggedIn();
                            }*/
                        }
                    });
                $urlRouterProvider.otherwise('/');
                $locationProvider.html5Mode(true);
                $locationProvider.hashPrefix('!');
            }
        ])
    ;
})
()