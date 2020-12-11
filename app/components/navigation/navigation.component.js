class NavigationController{
  constructor($state){
    Object.assign(this, {
      $state
    });

  }
}

angular
.module('peachtree')
.controller('NavigationController', NavigationController)
.component('navigation', {
  controller: 'NavigationController',
  controllerAs: '$ctrl',
  template: '/app/components/navigation.html'
})