angular
  .module('peachtree', ['ui.router', 'Authentication'])


  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    console.log('app.js - config');
    $stateProvider
    .state("login", {
      url: "/login",
      templateUrl: "components/authentication/login/login.html",
      controller: "LoginController",
      data: {
        requiredAuth: false
      },
    })

    .state("register", {
      url: "/register",
      templateUrl: "components/authentication/register/register.html",
      controller: "RegisterController", 
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
