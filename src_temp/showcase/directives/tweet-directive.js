/**
 * Created by jbz on 6/12/2015.
 */
(function() {
angular.module('hintchirps')
    .directive('tweet', function () {
        return {
            restrict: 'E',
            templateUrl: 'showcase/templates/tweet.tpl.html',
            transclude: true
        }
    });
})()