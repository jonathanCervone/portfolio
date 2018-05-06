app.controller("menuController", function ($scope, $window, $rootScope, $http, $location, $route) {

    $scope.scrolled = false;
    
    $window.scroll(function () { menuScroll() });

    function menuScroll() {
        if (window.pageYOffset > menu.offsetTop) {
            $scope.scrolled = true;
        }
        else {
            $scope.scrolled = false;
        }
    }
});