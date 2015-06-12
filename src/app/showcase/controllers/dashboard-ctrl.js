/**
 * Created by jbz on 6/12/2015.
 */
angular.module('bookbottles-showcase')
    .controller('DashController', function ($scope, $state, loggedIn, userAuth, twitService, onEnterFlag) {
        if (loggedIn !== true)
            $state.go('login');
        // $state.resolve says get some data
        if(onEnterFlag){
            twitService.getTweets('Angular news').then(function (tweets) {
                $scope.tweets = tweets.statuses;
            });
            onEnterFlag = false;
        }
        var dash = this;
        dash.userAuth = userAuth;
        $scope.loggedIn = loggedIn;

        $scope.submit = function () {
            twitService.getTweets($scope.query).then(function (tweets) {
                $scope.tweets = tweets.statuses;
            });
        };
    })
