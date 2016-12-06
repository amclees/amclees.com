angular.
  module('homepageApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {

      $routeProvider.
        when('/', {
          templateUrl: '/templates/homepage.template.html'
        }).
        when('/github', {
          template: '<h2>Github</h2>'
        }).
        when('/projects', {
          template: '<h2>Projects</h2>'
        }).
        when('/about', {
          template: '<h2>About</h2>'
        }).
        when('/contact', {
          template: '<h2>Contact</h2>'
        }).
        otherwise('/');
    }
]);