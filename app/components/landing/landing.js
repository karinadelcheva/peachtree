class LandingController {
  constructor(
    $state
  ){

    Object.assign(this, {
      $state
    });
    console.log('in landing');

  }


  goToLogin(){
    this.$state.go('login')
  }

}

angular
.module('peachtree')
.controller('LandingController', LandingController)
