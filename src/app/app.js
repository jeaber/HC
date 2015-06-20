angular.module('hintchirps', [
    'ui.router',
    'templates-app'
])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // Configure states herea
        $stateProvider
            .state('home', {
                abstract: true,
                templateUrl: 'showcase/templates/home.tpl.html',
                controller: 'HomeController',
                controllerAs: 'home',
                resolve: {
                    loggedIn: function (userAuth) {
                        return userAuth.loggedIn();
                    }
                }
            })
            .state('home.default', {
                url: '/',
                templateUrl: 'showcase/templates/home.default.html'
            })
            .state('home.register', {
                url: '/register',
                templateUrl: 'showcase/templates/home.register.html',
                controller: 'SignupController',
                controllerAs: 'signup',
                resolve: {
                    loggedIn: function (userAuth) {
                        return userAuth.loggedIn();
                    }
                }
            })
            .state('home.login', {
                url: '/login',
                templateUrl: 'showcase/templates/home.login.html',
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
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }]);
function MainCtrl($state){
    $state.transitionTo('contacts.list');
}