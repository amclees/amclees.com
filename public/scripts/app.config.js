angular.
  module('homepageApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {

      $routeProvider.
        when('/', {
          templateUrl: '/templates/homepage.template.html'
        }).
        when('/github', {
          template: '/templates/github.template.html'
        }).
        when('/projects', {
          template: '/templates/projects.template.html'
        }).
        when('/about', {
          template: '/templates/about.template.html'
        }).
        when('/contact', {
          template: '/templates/contact.template.html'
        }).
        otherwise('/');
    }
]);