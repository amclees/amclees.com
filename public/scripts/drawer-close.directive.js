app.directive('closeMenuItem', function() {
    return {
        restrict: 'AC',
        link: function($scope, $element) {
            $element.bind('click', function() {
                var drawer = angular.element(document.querySelector('.mdl-layout__drawer'));
                var drawerFocus = angular.element(document.querySelector('.mdl-layout__obfuscator'));
                if(drawer) {
                    drawer.toggleClass('is-visible');
                    drawerFocus.toggleClass('is-visible');
                }
            });
        }       
    };
});