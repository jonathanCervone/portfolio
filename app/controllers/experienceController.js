app.controller("experienceController", function ($scope, $http) {

    $scope.data;
    $scope.activeData;

    function init() {
        $http.get("/app/data/experience.json").then(function (response) {
            $scope.data = response.data.experiences;
        })
    }

    $scope.updateActiveData = function (item) {
        $scope.activeData = item;
    }

    init();
})