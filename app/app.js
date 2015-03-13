'use strict';

var gui = require('nw.gui');

var win = gui.Window.get();
win.maximize();

//angular.module('myApp', [
//  'ngRoute'
//]).
//
//config(['$routeProvider', function($routeProvider) {
//    $routeProvider.otherwise({redirectTo: '/view1'});
//}]);

require('./models').sequelize.sync();


