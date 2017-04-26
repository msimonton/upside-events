'use-strict'

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true)

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    .state('home', {
    url: '/home',
    templateUrl: 'views/home.html'
})

.state('about', {
    url: '/about',
    templateUrl: 'views/about.html',
})

.state('events', {
    url: '/contact',
    templateUrl: 'views/events.html',
})
.state('gallery', {
    url: '/contact',
    templateUrl: 'views/gallery.html',
})
.state('connect', {
    url: '/contact',
    templateUrl: 'views/connect.html',
})
.state('tickets', {
    url: '/contact',
    templateUrl: 'views/tickets.html',
})
})


$(function () {
  $('[data-toggle="popover"]').popover()
})
