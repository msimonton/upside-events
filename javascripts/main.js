'use-strict'




var angRoute = angular.module('angRoute', ['ui.router','ngAnimate']);


angRoute.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  // $locationProvider.html5Mode(true)

    $urlRouterProvider.otherwise('/home');

    $stateProvider

.state('home', {
    url: '/home',
    templateUrl: 'views/home.html'
})

.state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
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
angRoute.config(function ($provide) {
  $provide.decorator('$uiViewScroll', function ($delegate) {
    return function (uiViewElement) {
      window.scrollTo(0, (top - 30));
    };
  });
});

var app = angular.module("myApp", []);
angRoute.controller("donCtrl", function($scope) {
    $scope.donors = [
      "303 Magazine",
      "5280 Mag",
      "AEG Live Rocky Mountains",
      "Alamo Drafthouse",
      "Alexa Botanicals",
      "America's Beer Fest",
      "Aspen Ski Company",
      "Barre Forte",
      "Bazar Denver",
      "Bellus",
      "Bigsby's Folly",
      "Bonanno Concepts",
      "Brider",
      "BrunchFest",
      "Cloth + Gold",
      "Core Power Yoga",
      "DEFINE",
      "Denver Beer Co",
      "Denver Joyrides",
      "Denver Passport",
      "Dio Mio",
      "Edible Beats",
      "Film on the Rocks",
      "Fitwall",
      "Glamour Bar",
      "Grandoozy",
      "Health-Ade Kombucha",
      "Heart and Sleeve",
      "Illegal Pete's",
      "Intrepid Sojourner Beer Project",
      "Live Nation",
      "MCA",
      "Massage/Chiro",
      "Midnight Rambler",
      "Mindfully Curated",
      "Pure Barre Stapleton",
      "Rhino Yacht Club",
      "Rush Cycle",
      "Shift Cycle + Fitness",
      "Smashburger",
      "TBD Foods",
      "The Family Jones Distillery",
      "The Storybrick Salon",
      "Topo Designs",
      "Totem True Yoga Mats",
      "Transform",
      "Troy Guard",
      "Tru Fit Athletic Clubs",
      "Two Parts",
      "Upstairs Circus",
      "Westword",
      "Yoga on The Rocks"
    ]


});
