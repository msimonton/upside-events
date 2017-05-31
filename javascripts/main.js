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
angRoute.config(function ($provide) {
  $provide.decorator('$uiViewScroll', function ($delegate) {
    return function (uiViewElement) {
      window.scrollTo(0, (top - 30));
    };
  });
});

// $(document).ready(function(){
//     // $('[data-toggle="popover"]').popover();
//     var name= $('.headshot-name');
//     var text= $('.headshot-text');
//     var pic= $('.headshot')
//
//       $('.as').click(function() {
//         name.append('Anne-Marie Salcito')
//       })
//
// });

// angRoute.directive('customPopover', function () {
//     return {
//         restrict: 'A',
//         template: '<span>{{label}}</span>',
//         link: function (scope, el, attrs) {
//             scope.label = attrs.popoverLabel;
//             $(el).popover({
//                 trigger: 'hover',
//                 html: true,
//                 content: attrs.popoverHtml,
//                 placement: attrs.popoverPlacement
//             });
//         }
//     };
// });



    // var counter = sessionStorage.getItem('count');
    //
    //     var div = $("#logo-animation");
    //     var bod = $('body');
    //
    //     console.log(counter)
    //     if(counter=== null) {
    //       $(document).ready(function(){
    //         $('.home').css('display','none');
    //         div.animate({height: '385px', width:'630px', opacity: '.8'}, 300);
    //
    //         div.animate({height: '340px', width: '550px',opacity: '.6'},270);
    //         bod.stop().delay().animate({backgroundColor: '#26333c'}, 50);
    //         bod.animate({backgroundColor: '#192228'},300);
    //         div.animate({height: '347px', width: '572px',opacity: '1'}, 180);
    //         div.delay(2000).fadeOut('slow');
    //
    //         $('#test').delay(2600).fadeOut('slow');
    //         $('.home').delay(3400).fadeIn(1500);
    //         sessionStorage.removeItem("count");
    //         sessionStorage.setItem('count', '1');
    //         console.log(counter)
    //       });
    //   }
    //
    //   else {
    //     $(document).ready(function(){
    //     $('.logo-animation').css('display','none');
    //     $('.home').css('display', 'block')
    //     console.log(counter)
    //   });
    //   }


  //   var counter = sessionStorage.getItem('count')
  //   console.log(counter)
  //   if(counter===1){
  // $(document).ready(function(){
  //
  //     $('.logo-animation').css('display','none');
  //     $('.home').css('display', 'block')
  //     console.log(counter)
  //   })
  //
  //     }
  //
  //       else {
  //         $(document).ready(function(){
  //         var div = $("#logo-animation");
  //         var bod = $('body');
  //
  //         div.animate({height: '385px', width:'630px', opacity: '.8'}, 300);
  //
  //         div.animate({height: '340px', width: '550px',opacity: '.6'},270);
  //         bod.stop().delay().animate({backgroundColor: '#26333c'}, 50);
  //         bod.animate({backgroundColor: '#192228'},300);
  //         div.animate({height: '347px', width: '572px',opacity: '1'}, 180);
  //         div.delay(2000).fadeOut('slow');
  //
  //         $('#test').delay(2600).fadeOut('slow');
  //         $('.home').delay(3400).fadeIn(1500);
  //         sessionStorage.setItem('count', '1');
  //         // console.log(counter)
  //   });
  // }
