app.controller("codeController", function ($scope, $http) {
    $scope.data;
    $scope.activeData;
    $scope.imageIndex = 0;

    function init() {
        $http.get("/app/data/code.json").then(function (response) {
            $scope.data = response.data.code;
        })
    }

    $scope.updateActiveData = function (item) {
        $scope.activeData = item;
        imageIndex = 0;
    }

    $scope.updateImageIndex = function (index) {
        $scope.imageIndex = index;
    }

    init();
})