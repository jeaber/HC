/*
var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    paths: {
        app: './app/app',
        apphome: './app/showcase/controllers/home-ctrl',
        appdash: './app/showcase/controllers/dashboard-ctrl',
        applogin: './app/showcase/controllers/login-ctrl',
        appsignup: './app/showcase/controllers/signup-ctrl',
        userauth: './app/showcase/services/userAuth-factory',
        usermodel: './app/showcase/services/userModel-factory'
    },
    shim: {
        'jquery.colorize': ['jquery'],
        'jquery.scroll': ['jquery'],
        'backbone.layoutmanager': ['backbone']
    },
    nodeRequire: require
});

 requirejs(['angular', 'angular-ui-router', 'jquery', 'ramda', 'app', 'apphome', 'appdash', 'applogin', 'appsignup', 'userauth', 'usermodel'],
 function () {
 //foo and bar are loaded according to requirejs
 //config, but if not found, then node's require
 //is used to load the module.
 });
*/

/*

require('angular');
require('angular-ui-router');

require('jquery');
require('ramda');
require('jquery');

require('./app/app.js');
require('./app/showcase/controllers/dashboard-ctrl.js');
require('./app/showcase/controllers/home-ctrl.js');
require('./app/showcase/controllers/login-ctrl.js');
require('./app/showcase/controllers/signup-ctrl.js');

require('./app/showcase/directives/tweet-directive.js');

require('./app/showcase/services/twitService-factory.js');
require('./app/showcase/services/userAuth-factory.js');
require('./app/showcase/services/userModel-factory.js');
*/
