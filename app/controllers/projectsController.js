app.controller("projectsController", function ($scope, $http) {

    $scope.data;
    $scope.activeData;

    $scope.objectiveOpen = false;
    $scope.techOpen = false;
    $scope.buildOpen = false;
    $scope.testingOpen = false;
    $scope.implementationOpen = false;

    function init() {
        $http.get("/app/data/projects.json").then(function (response) {
            $scope.data = response.data.projects;
        })
    }

    $scope.updateActiveData = function (item) {
        $scope.activeData = item;
        $scope.objectiveOpen = true;
        $scope.techOpen = true;
        $scope.buildOpen = true;
        $scope.testingOpen = true;
        $scope.implementationOpen = true;
    }

    $scope.updateObjective = function () {
        $scope.objectiveOpen = !$scope.objectiveOpen;
    }

    $scope.updateTech = function () {
        $scope.techOpen = !$scope.techOpen;
    }

    $scope.updateBuild = function() { 
        $scope.buildOpen = !$scope.buildOpen;
    }

    $scope.updateTesting = function () {
        $scope.testingOpen = !$scope.testingOpen;
    }

    $scope.updateImplementation = function () {
        $scope.implementationOpen = !$scope.implementationOpen;
    }

    init();
})