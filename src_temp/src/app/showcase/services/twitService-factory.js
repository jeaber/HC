/**
 * Created by jbz on 6/12/2015.
 */
angular.module('bookbottles-showcase')
    .factory('twitService', ['$q', function ($q) {
        var getTweets = function (query) {
            var deferred = $q.defer();
            socket.emit('getFeed', query);

            socket.on('feed', function (data) {
                deferred.resolve(data);
            });
            return deferred.promise;
        };
        return {
            getTweets: getTweets
        };
    }]);
