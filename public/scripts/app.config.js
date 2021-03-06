angular.
  module('homepageApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {

      $routeProvider.
        when('/', {
          templateUrl: '/templates/homepage.template.html'
        }).
        when('/projects', {
          templateUrl: '/templates/projects.template.html'
        }).
        when('/about', {
          templateUrl: '/templates/about.template.html'
        }).
        when('/contact', {
          templateUrl: '/templates/contact.template.html',
          controller: 'contactController'
        }).
        otherwise({
          templateUrl: '/templates/404.template.html'
        });
    }
]);