var config = require('./../build.config'),
    express = require('express'),
    app = express(),
    path = require('path'),
    server = require('http').createServer(app),
    twit = require('twit'),
    io = require('socket.io')(server);

// TWIT CONFIG -- set to read only ;) -- twitter api was not fun. (no client side support)

var T = new twit({
    consumer_key:         '57uErmfeCRXodW2QEPBGAF8ak',
    consumer_secret:      'zEoWdwN971a1J0AGgjfi7egmCrbVRU3lE6LNE02bd07haYepnl',
    access_token:         '3303446765-AfBpBChExaZNbIzmAyt1dxHCdPpXOkC4ofrUN4M',
    access_token_secret:  '10jih6Bnu4dn3wN7WrocRVi44cLpiRzHYiZtGNWFNA9oN'
});

// SOCKET MANAGEMENT -- better way of doing this? RxJS/Bacon would be cool.

io.on('connection', function (socket) {
    // listen for search request
    socket.on('getFeed', function (query) {
        T.get('search/tweets', { q: query + ' since:2015-6-5', count: 10 }, function(err, data2, response) {
            // send it down to the twitSerice-factory to pass it off to dashController
            socket.emit('feed', data2);
        })
    });
});

// CONFIG SERVER

app.use(express.static(config.build_dir));
app.get('*', function (req, res) {
    res.sendFile(path.resolve(config.build_dir + '/index.html'));
});

// FIRE IT UP

server.listen(config.port, function () {
    console.log("Express server listening on port %d", config.port);
});
