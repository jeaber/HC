/**
 * Created by jbz on 6/12/2015.
 */
angular.module('hintchirps')
    .controller('DashController', ['$scope', '$state', 'loggedIn', 'userAuth', 'twitService', function ($scope, $state, loggedIn, userAuth, twitService) {
        if (loggedIn !== true)
            $state.go('login');

        twitService.getTweets('Angular news').then(function (tweets) {
            $scope.tweets = tweets.statuses;
        });

        var dash = this;
        dash.userAuth = userAuth;
        $scope.loggedIn = loggedIn;

        $scope.submit = function () {
            twitService.getTweets($scope.query).then(function (tweets) {
                $scope.tweets = tweets.statuses;
            });
        };
    }])
