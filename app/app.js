angular
  .module('peachtree', ['ui.router'])


  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    console.log('app.js - config');
    $stateProvider
      .state("landing", {
        url: "/landing",
        templateUrl: "components/landing/landing.html",
        controller: "LandingController",
        data: {
          requiredAuth: false
        },
      })
      .state("login", {
        url: "/login",
        templateUrl: "auth/login/login.html",
        controller: "LoginController",
        data: {
          requiredAuth: false
        },
      })

    $urlRouterProvider.otherwise('/landing');
  }
  ])

  // .run(function ($transitions, $state, AuthenticationService) {
  //   $transitions.onStart({
  //     to: 'login'
  //   }, function () {
  //     let currentUser = firebase.auth().currentUser;
  //     if (currentUser) {
  //       console.log('currentuser')
  //       return $state.go('home')
  //     } else {
  //       console.log('no currentuser')
  //       return $state.go('login');
  //     }
  // //   });
  // });
    // $transitions.onStart({
    //   to: 'login' 
    // }, function () {
    //   if (AuthenticationService.isAuthenticated()) {
    //      $state.go('home');
    //   }
    // })
  // })
