let landing = {
  url: '/',
  template: '<h3> raboti li </h3>'
}



angular
.module('peachtree')
.config(function($stateProvider) {
  $stateProvider.state(landing);
});