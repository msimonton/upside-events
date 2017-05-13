'use-strict'

var angRoute = angular.module('angRoute', ['ui.router','ngAnimate']);

angRoute.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
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
    url: '/events',
    templateUrl: 'views/events.html',
})
.state('gallery', {
    url: '/gallery',
    templateUrl: 'views/gallery.html',
})
.state('connect', {
    url: '/connect',
    templateUrl: 'views/connect.html',
})
.state('tickets', {
    url: '/tickets',
    templateUrl: 'views/tickets.html',
})
})


$(function () {
  $('[data-toggle="popover"]').popover()



  $(document).ready(function(){
    $("button").click(function(){
        var div = $("#logo-animation");
        var bod = $('body');

        div.animate({height: '400px', width:'660px', opacity: '1'}, 300);

        div.animate({height: '340px', width: '550px',opacity: '.7'},400);
        bod.stop().delay(200).animate({backgroundColor: '#26333c'}, 100);
        bod.animate({backgroundColor: '#192228'},300);
        div.animate({height: '351px', width: '581px',opacity: '1'}, 400);

    });
});
})
